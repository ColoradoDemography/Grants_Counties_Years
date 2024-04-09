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

    //Totals mouseover    
    if (stat === "1"){
        if (granttype === "1") {
            result_value = cMap.retrieveTtl(fips,"NEU").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "2") {
            result_value = cMap.retrieveTtl(fips,"BBFS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "3") {
            result_value = cMap.retrieveTtl(fips,"CCPI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "4") {
            result_value = cMap.retrieveTtl(fips,"CDBGCV").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "5") {
            result_value = cMap.retrieveTtl(fips,"CDBGED").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "6") {
            result_value = cMap.retrieveTtl(fips,"CDBGPF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "7") {
            result_value = cMap.retrieveTtl(fips,"CDBGPS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "8") {
            result_value = cMap.retrieveTtl(fips,"CENS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "9") {
            result_value = cMap.retrieveTtl(fips,"CHPG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "10") {
            result_value = cMap.retrieveTtl(fips,"SAR").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "11") {
            result_value = cMap.retrieveTtl(fips,"BSARFX").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "12") {
            result_value = cMap.retrieveTtl(fips,"CSBG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "13") {
            result_value = cMap.retrieveTtl(fips,"CTF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "14") {
            result_value = cMap.retrieveTtl(fips,"CVRF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "15") {
            result_value = cMap.retrieveTtl(fips,"DCFA").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "16") {
            result_value = cMap.retrieveTtl(fips,"SEV_FML").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "17") {
            result_value = cMap.retrieveTtl(fips,"EIAF").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "18") {
            result_value = cMap.retrieveTtl(fips,"FCB").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "19") {
            result_value = cMap.retrieveTtl(fips,"IHOI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "20") {
            result_value = cMap.retrieveTtl(fips,"IHOP").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "21") {
            result_value = cMap.retrieveTtl(fips,"GAME").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "22") {
            result_value = cMap.retrieveTtl(fips,"LOMA").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "23") {
            result_value = cMap.retrieveTtl(fips,"LPC").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "24") {
            result_value = cMap.retrieveTtl(fips,"MS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "25") {
            result_value = cMap.retrieveTtl(fips,"MSOB").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "26") {
            result_value = cMap.retrieveTtl(fips,"GBMJ").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "27") {
            result_value = cMap.retrieveTtl(fips,"MJ").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "28") {
            result_value = cMap.retrieveTtl(fips,"MCRG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "29") {
            result_value = cMap.retrieveTtl(fips,"MRP").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "30") {
            result_value = cMap.retrieveTtl(fips,"POMH").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "31") {
            result_value = cMap.retrieveTtl(fips,"PSI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "32") {
            result_value = cMap.retrieveTtl(fips,"REDI").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "33") {
            result_value = cMap.retrieveTtl(fips,"SBR").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "34") {
            result_value = cMap.retrieveTtl(fips,"RNSS").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "35") {
            result_value = cMap.retrieveTtl(fips,"SCIG").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        if (granttype  === "36") {
            result_value = cMap.retrieveTtl(fips,"VFP").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        }
        /* if (granttype  === "37") {
            result_value = cMap.retrieveTtl(fips,"VFP").toLocaleString(undefined, {
                maximumFractionDigits: 0
            });
        } */
        document.getElementById('caption_control').innerHTML = "<p>" + e.target.feature.properties.NAME + ":&nbsp;&nbsp;&nbsp;" + result_value + "</p>";
    }

    //Percents mouseover
    else if (stat = "2"){
        if (granttype === "1") {
            result_value = cMap.retrievePctGrants(fips,"NEU").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "2") {
            result_value = cMap.retrievePctGrants(fips,"BBFS").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "3") {
            result_value = cMap.retrievePctGrants(fips,"CCPI").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "4") {
            result_value = cMap.retrievePctGrants(fips,"CDBGCV").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "5") {
            result_value = cMap.retrievePctGrants(fips,"CDBGED").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "6") {
            result_value = cMap.retrievePctGrants(fips,"CDBGPF").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "7") {
            result_value = cMap.retrievePctGrants(fips,"CDBGPS").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "8") {
            result_value = cMap.retrievePctGrants(fips,"CENS").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "9") {
            result_value = cMap.retrievePctGrants(fips,"CHPG").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "10") {
            result_value = cMap.retrievePctGrants(fips,"SAR").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "11") {
            result_value = cMap.retrievePctGrants(fips,"BSARFX").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "12") {
            result_value = cMap.retrievePctGrants(fips,"CSBG").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "13") {
            result_value = cMap.retrievePctGrants(fips,"CTF").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "14") {
            result_value = cMap.retrievePctGrants(fips,"CVRF").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "15") {
            result_value = cMap.retrievePctGrants(fips,"DCFA").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "16") {
            result_value = cMap.retrievePctGrants(fips,"SEV_FML").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "17") {
            result_value = cMap.retrievePctGrants(fips,"EIAF").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "18") {
            result_value = cMap.retrievePctGrants(fips,"FCB").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "19") {
            result_value = cMap.retrievePctGrants(fips,"IHOI").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "20") {
            result_value = cMap.retrievePctGrants(fips,"IHOP").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "21") {
            result_value = cMap.retrievePctGrants(fips,"GAME").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "22") {
            result_value = cMap.retrievePctGrants(fips,"LOMA").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "23") {
            result_value = cMap.retrievePctGrants(fips,"LPC").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "24") {
            result_value = cMap.retrievePctGrants(fips,"MS").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "25") {
            result_value = cMap.retrievePctGrants(fips,"MSOB").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "26") {
            result_value = cMap.retrievePctGrants(fips,"GBMJ").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "27") {
            result_value = cMap.retrievePctGrants(fips,"MJ").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "28") {
            result_value = cMap.retrievePctGrants(fips,"MCRG").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "29") {
            result_value = cMap.retrievePctGrants(fips,"MRP").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "30") {
            result_value = cMap.retrievePctGrants(fips,"POMH").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "31") {
            result_value = cMap.retrievePctGrants(fips,"PSI").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "32") {
            result_value = cMap.retrievePctGrants(fips,"REDI").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "33") {
            result_value = cMap.retrievePctGrants(fips,"SBR").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "34") {
            result_value = cMap.retrievePctGrants(fips,"RNSS").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "35") {
            result_value = cMap.retrievePctGrants(fips,"SCIG").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        if (granttype  === "36") {
            result_value = cMap.retrievePctGrants(fips,"VFP").toLocaleString(undefined, {
                maximumFractionDigits: 2
            });
        }
        document.getElementById('caption_control').innerHTML = "<p>" + e.target.feature.properties.NAME + ":&nbsp;&nbsp;&nbsp;" + result_value + "%</p>";
    }
        



    });

}