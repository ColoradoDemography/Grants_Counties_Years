var CMap = require("./init_object.js")();
var getUserInputs = require("./get_from_dom.js");
var filterData = require("./filter_data.js");


module.exports = function(e, worker_data) {


    // string_output[0] = comma delimited years  
    // string_output[1] = selected stat
    var string_output = getUserInputs();


    filterData(worker_data, string_output[0], function(data) {

        var cMap = new CMap(data);
        var fips = parseInt(e.target.feature.properties.COUNTYFP, 10);
        var stat = string_output[1];

        var result_value;

        if (stat === "1") {
            result_value = cMap.retrieveTtl(fips,"BBFS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
       /*  if (stat === "1") {
            result_value = cMap.retrieveTtlBBFS(fips).toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        } */
        if (stat === "2") {
            result_value = cMap.retrieveTtl(fips,"CCPI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "3") {
            result_value = cMap.retrieveTtl(fips,"CDBGCV").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "4") {
            result_value = cMap.retrieveTtl(fips,"CDBGED").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "5") {
            result_value = cMap.retrieveTtl(fips,"CDBGPF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "6") {
            result_value = cMap.retrieveTtl(fips,"CDBGPS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "7") {
            result_value = cMap.retrieveTtl(fips,"CENS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "8") {
            result_value = cMap.retrieveTtl(fips,"CHPG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "9") {
            result_value = cMap.retrieveTtl(fips,"CSBG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "10") {
            result_value = cMap.retrieveTtl(fips,"CTF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "11") {
            result_value = cMap.retrieveTtl(fips,"CVRF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (stat === "12") {
            result_value = cMap.retrieveTtl(fips,"DCFA").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }

        document.getElementById('caption_control').innerHTML = "<p>" + e.target.feature.properties.NAME + ":&nbsp;&nbsp;&nbsp;" + result_value + "</p>";



    });

}