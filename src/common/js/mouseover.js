var CMap = require("./init_object.js")();
var getUserInputs = require("./get_from_dom.js");
var filterData = require("./filter_data.js");


module.exports = function(e, worker_data) {


    // string_output[0] = comma delimited years  
    // string_output[1] = selected stat
    var string_output = getUserInputs();


    filterData(worker_data, string_output[1], function(data) {

        var cMap = new CMap(data);
        var fips = parseInt(e.target.feature.properties.COUNTYFP, 10);
        var granttype = string_output[2];
        var stat = string_output[0]; 

        var result_value;
if (stat === "1"){
        if (granttype === "1") {
            result_value = cMap.retrieveTtl(fips,"BBFS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
       /*  if (stat === "1") {
            result_value = cMap.retrieveTtlBBFS(fips).toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        } */
        if (granttype  === "2") {
            result_value = cMap.retrieveTtl(fips,"CCPI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "3") {
            result_value = cMap.retrieveTtl(fips,"CDBGCV").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "4") {
            result_value = cMap.retrieveTtl(fips,"CDBGED").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "5") {
            result_value = cMap.retrieveTtl(fips,"CDBGPF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "6") {
            result_value = cMap.retrieveTtl(fips,"CDBGPS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "7") {
            result_value = cMap.retrieveTtl(fips,"CENS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "8") {
            result_value = cMap.retrieveTtl(fips,"CHPG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "9") {
            result_value = cMap.retrieveTtl(fips,"CSBG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "10") {
            result_value = cMap.retrieveTtl(fips,"CTF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "11") {
            result_value = cMap.retrieveTtl(fips,"CVRF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "12") {
            result_value = cMap.retrieveTtl(fips,"DCFA").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
    }
        document.getElementById('caption_control').innerHTML = "<p>" + e.target.feature.properties.NAME + ":&nbsp;&nbsp;&nbsp;" + result_value + "</p>";



    });

}