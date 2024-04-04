var redraw_legend = require("./redraw_legend.js");
var getUserInputs = require("./get_from_dom.js");

module.exports = function(geolayer, cMap, num) {

    var string_output = getUserInputs();

    var max;
    var min;
    var median;
    var spreadl;
    var spreadh;
    var breaks = [];

    //totals
    if (string_output[0] === "1"){
        if (num === "1") {
            max = cMap.getMaxTtl("BBFS");
            min = cMap.getMinTtl("BBFS");
            median = cMap.getMedianTotal("BBFS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
            console.log(breaks);
        }
        if (num === "2") {
            max = cMap.getMaxTtl("CCPI");
            min = cMap.getMinTtl("CCPI");
            median = cMap.getMedianTotal("CCPI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "3") {
            max = cMap.getMaxTtl("CDBGCV");
            min = cMap.getMinTtl("CDBGCV");
            median = cMap.getMedianTotal("CDBGCV");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "4") {
            max = cMap.getMaxTtl("CDBGED");
            min = cMap.getMinTtl("CDBGED");
            median = cMap.getMedianTotal("CDBGED");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "5") {
            max = cMap.getMaxTtl("CDBGPF");
            min = cMap.getMinTtl("CDBGPF");
            median = cMap.getMedianTotal("CDBGPF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "6") {
            max = cMap.getMaxTtl("CDBGPS");
            min = cMap.getMinTtl("CDBGPS");
            median = cMap.getMedianTotal("CDBGPS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "7") {
            max = cMap.getMaxTtl("CENS");
            min = cMap.getMinTtl("CENS");
            median = cMap.getMedianTotal("CENS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "8") {
            max = cMap.getMaxTtl("CHPG");
            min = cMap.getMinTtl("CHPG");
            median = cMap.getMedianTotal("CHPG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "9") {
            max = cMap.getMaxTtl("CSBG");
            min = cMap.getMinTtl("CSBG");
            median = cMap.getMedianTotal("CSBG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "10") {
            max = cMap.getMaxTtl("CTF");
            min = cMap.getMinTtl("CTF");
            median = cMap.getMedianTotal("CTF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "11") {
            max = cMap.getMaxTtl("CVRF");
            min = cMap.getMinTtl("CVRF");
            median = cMap.getMedianTotal("CVRF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "12") {
            max = cMap.getMaxTtl("DCFA");
            min = cMap.getMinTtl("DCFA");
            median = cMap.getMedianTotal("DCFA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }

        redraw_legend(min, max, num, breaks);

        geolayer.setStyle(function(d) {

            var value;
            var fips = parseInt(d.properties.COUNTYFP);
            
            if (num === "1") {
                var program = "BBFS";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "2") {
                var program = "CCPI";
                value = cMap.retrieveTtl(fips,program);
            }
            if (num === "3") {
                var program = "CDBGCV";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "4") {
                var program = "CDBGED";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "5") {
                var program = "CDBGPF";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "6") {
                var program = "CDBGPS";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "7") {
                var program = "CENS";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "8") {
                var program = "CHPG";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "9") {
                var program = "CSBG";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "10") {
                var program = "CTF";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "11") {
                var program = "CVRF";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "12") {
                var program = "DCFA";
                value = cMap.retrieveTtl(fips,program);
            }  
        
            if ((value > (-Infinity)) && (value <= breaks[0])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(200,200,200)"
                };
            }
            if ((value > breaks[0]) && (value <= breaks[1])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(255,255,217)"
                };
            }
            if ((value > breaks[1]) && (value <= breaks[2])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(237,248,177)"
                };
            }
            if ((value > breaks[2]) && (value <= breaks[3])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(199,233,180)"
                };
            }
            if ((value > breaks[3]) && (value <= breaks[4])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(127,205,187)"
                };
            }
            if ((value > breaks[4]) && (value <= breaks[5])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(65,182,196)"
                };
            }
            if ((value > breaks[5]) && (value <= breaks[6])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(29,145,192)"
                };
            }
            if ((value > breaks[6]) && (value <= breaks[7])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(34,94,168)"
                };
            }
            if ((value > breaks[7]) && (value <= breaks[8])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(37,52,148)"
                };
            }
            if ((value > breaks[8]) && (value <= Infinity)) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(8,29,88)"
                };
            }

            return {
                weight: 13,
                color: "blue",
                fillOpacity: 0
            }; 

        });

    }

    //percents
    else if (string_output[0] === "2"){
        if (num === "1") {
            max = cMap.getMaxPct("BBFS");
            min = cMap.getMinPct("BBFS");
            median = cMap.getMedianPct("BBFS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        
        }
        if (num === "2") {
            max = cMap.getMaxPct("CCPI");
            min = cMap.getMinPct("CCPI");
            median = cMap.getMedianPct("CCPI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "3") {
            max = cMap.getMaxPct("CDBGCV");
            min = cMap.getMinPct("CDBGCV");
            median = cMap.getMedianPct("CDBGCV");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "4") {
            max = cMap.getMaxPct("CDBGED");
            min = cMap.getMinPct("CDBGED");
            median = cMap.getMedianPct("CDBGED");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "5") {
            max = cMap.getMaxPct("CDBGPF");
            min = cMap.getMinPct("CDBGPF");
            median = cMap.getMedianPct("CDBGPF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "6") {
            max = cMap.getMaxPct("CDBGPS");
            min = cMap.getMinPct("CDBGPS");
            median = cMap.getMedianPct("CDBGPS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "7") {
            max = cMap.getMaxPct("CENS");
            min = cMap.getMinPct("CENS");
            median = cMap.getMedianPct("CENS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "8") {
            max = cMap.getMaxPct("CHPG");
            min = cMap.getMinPct("CHPG");
            median = cMap.getMedianPct("CHPG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "9") {
            max = cMap.getMaxPct("CSBG");
            min = cMap.getMinPct("CSBG");
            median = cMap.getMedianPct("CSBG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "10") {
            max = cMap.getMaxPct("CTF");
            min = cMap.getMinPct("CTF");
            median = cMap.getMedianPct("CTF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "11") {
            max = cMap.getMaxPct("CVRF");
            min = cMap.getMinPct("CVRF");
            median = cMap.getMedianPct("CVRF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "12") {
            max = cMap.getMaxPct("DCFA");
            min = cMap.getMinPct("DCFA");
            median = cMap.getMedianPct("DCFA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }

        redraw_legend(min, max, num, breaks);

        geolayer.setStyle(function(d) {

            var value;
            var fips = parseInt(d.properties.COUNTYFP);
            
            if (num === "1") {
                var program = "BBFS";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "2") {
                var program = "CCPI";
                value = cMap.retrievePctGrants(fips,program);
            }
            if (num === "3") {
                var program = "CDBGCV";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "4") {
                var program = "CDBGED";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "5") {
                var program = "CDBGPF";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "6") {
                var program = "CDBGPS";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "7") {
                var program = "CENS";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "8") {
                var program = "CHPG";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "9") {
                var program = "CSBG";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "10") {
                var program = "CTF";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "11") {
                var program = "CVRF";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "12") {
                var program = "DCFA";
                value = cMap.retrievePctGrants(fips,program);
            }  
        
            if ((value > (-Infinity)) && (value <= breaks[0])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(200,200,200)"
                };
            }
            if ((value > breaks[0]) && (value <= breaks[1])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(255,255,217)"
                };
            }
            if ((value > breaks[1]) && (value <= breaks[2])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(237,248,177)"
                };
            }
            if ((value > breaks[2]) && (value <= breaks[3])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(199,233,180)"
                };
            }
            if ((value > breaks[3]) && (value <= breaks[4])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(127,205,187)"
                };
            }
            if ((value > breaks[4]) && (value <= breaks[5])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(65,182,196)"
                };
            }
            if ((value > breaks[5]) && (value <= breaks[6])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(29,145,192)"
                };
            }
            if ((value > breaks[6]) && (value <= breaks[7])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(34,94,168)"
                };
            }
            if ((value > breaks[7]) && (value <= breaks[8])) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(37,52,148)"
                };
            }
            if ((value > breaks[8]) && (value <= Infinity)) {
                return {
                    weight: 1,
                    color: "grey",
                    fillOpacity: 1,
                    fillColor: "rgb(8,29,88)"
                };
            }

            return {
                weight: 13,
                color: "blue",
                fillOpacity: 0
            }; //hey you; there's a problem

        });
    }


}