//will assume incoming data includes all counties.  countyfips=1 will be used for all data breadth calcs

module.exports = function() {

    var CMap = function(data) {

        var fips_array = [1, 3, 5, 7, 9, 11, 13, 14, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 113, 115, 117, 119, 121, 123, 125, 500];

        this.data = data;

        var first_year = function() {
            var low_year_value = 5000;
            for (let i = 0; i < data.length; i++) {
                if (data[i].year < low_year_value) {
                    low_year_value = data[i].year;
                }
            }
            return low_year_value;
        }();
        this.first_year = first_year;

        var last_year = function() {
            var high_year_value = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].year > high_year_value) {
                    high_year_value = data[i].year;
                }
            }
            return high_year_value;
        }();
        this.last_year = last_year;

        var number_of_years = function() {
            return (last_year - first_year);
        }();
        this.number_of_years = number_of_years;

        /* BBFS */

        this.retrieveTtlGrants = function(year, program) {
            var allgrants = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].countyfips === 500 && data[i].year === year) {
                    allgrants = allgrants + parseInt(data[i][program]);
                }
            }
            return allgrants;
        }

        this.retrievePctGrants = function(fips, program) {
            var running_total_grants = 0;
            for (let j = (first_year); j < (last_year + 1); j++) {
                running_total_grants += this.retrieveCountyTtl(fips, j, program);
            }

            var running_state_grants = 0;
            for (let j = (first_year); j < (last_year + 1); j++) {
                running_state_grants += this.retrieveCountyTtl(500, j, program);
            }

            var pctgrants = ((running_total_grants / running_state_grants) * 100).toFixed(2);
            if (isFinite(pctgrants)) {
                return pctgrants;
            } else {
                return 0;
            }
        }

        this.getMaxPct = function(program) {
            var max_value = -Infinity;
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = parseFloat(this.retrievePctGrants(fips_array[i], program));
                if (current_county > max_value) {
                    max_value = current_county;
                }
            }
            //var max_pct = (max_value * 100).toFixed(2);
            //return max_pct;
            return max_value;
        }

        this.getMinPct = function(program) {
            var min_value = Infinity;
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = parseFloat(this.retrievePctGrants(fips_array[i], program));
                if (current_county < min_value) {
                    min_value = current_county;
                }
            }
            //var min_pct = (min_value * 100).toFixed(2);
            //return min_pct;
            return min_value;
        }
        this.getMedianPct = function(program) {
            var values = [];
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = parseFloat(this.retrievePctGrants(fips_array[i], program));
                values.push(current_county);
            }

            values.sort(function(a, b) {
                return a - b;
            });

            var half = Math.floor(values.length / 2);
            if (values.length % 2)
                return values[half];
            else
                return (values[half - 1] + values[half]) / 2.0;
        }

        this.retrieveCountyTtl = function(fips, year, program) {
            
            for (let i = 0; i < data.length; i++) {
                if (data[i].countyfips === fips && data[i].year === year) {
                    return Number(data[i][program]);
                }
            }
            return 0;
        }

        this.retrieveTtl = function(fips,program) {
            
            var running_total_grants = 0;
            for (let j = (first_year); j < (last_year + 1); j++) {
                running_total_grants += this.retrieveCountyTtl(fips, j, program);
            }
            
            return running_total_grants;

        }

        this.getMaxTtl = function(program) {
            var max_value = -Infinity;
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = this.retrieveTtl(fips_array[i],program);
                if (current_county > max_value) {
                    max_value = current_county;
                }
            }
            
            return max_value;
        }

        this.getMinTtl = function(program) {
            var min_value = Infinity;
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = this.retrieveTtl(fips_array[i],program);
                if (current_county < min_value) {
                    min_value = current_county;
                }
            }
            return min_value;
        }


        this.getMedianTotal = function(program) {
            var values = [];
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = parseFloat(this.retrieveTtl(fips_array[i],program));
                values.push(current_county);
            }

            values.sort(function(a, b) {
                return a - b;
            });

            var half = Math.floor(values.length / 2);
            if (values.length % 2)
                return values[half];
            else
                return (values[half - 1] + values[half]) / 2.0;
        }

        
        /* this.getMinTtl = function(program) {
            var min_value = Infinity;
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = this.retrieveTtl(fips_array[i],program);
                if (current_county < min_value) {
                    min_value = current_county;
                }
            }
            return min_value;
        }


        this.getMedianTotal = function(program) {
            var values = [];
            for (let i = 0; i < fips_array.length; i++) {
                var current_county = parseFloat(this.retrieveTtl(fips_array[i],program));
                values.push(current_county);
            }

            values.sort(function(a, b) {
                return a - b;
            });

            var half = Math.floor(values.length / 2);
            if (values.length % 2)
                return values[half];
            else
                return (values[half - 1] + values[half]) / 2.0;
        } */
    }



    return CMap; // return constructor function

}