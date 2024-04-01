var redraw_legend = require("./redraw_legend.js");

module.exports = function(geolayer, cMap, num) {

    var max;
    var min;
    var median;
    var spreadl;
    var spreadh;
    var breaks = [];

    //Not sure this chunk is needed
    /*if (num === "9") {  
        max = cMap.getMaxPctChange();
        min = cMap.getMinPctChange();
        breaks = [min * 0.5, min * 0.35, min * 0.2, min * 0.1, 0, max * 0.1, max * 0.2, max * 0.35, max * 0.5, max * 0.75];
        if (min > 0) {
            min = -max;
        }
    }
     if (num === "2") {
        max = cMap.getMaxTtlChange();
        min = cMap.getMinTtlChange();
        breaks = [min * 0.4, min * 0.25, min * 0.1, min * 0.05, 0, max * 0.05, max * 0.1, max * 0.2, max * 0.35, max * 0.5];
        if (min > 0) {
            min = -max;
        }
    } 
    if (num === "3") {
        max = cMap.getMaxAvgPctPopChg();
        min = cMap.getMinAvgPctPopChg();
        breaks = [min * 0.5, min * 0.35, min * 0.2, min * 0.1, 0, max * 0.1, max * 0.2, max * 0.35, max * 0.5, max * 0.75];
        if (min > 0) {
            min = -max;
        }
    }
    if (num === "4") {
        max = cMap.getMaxAvgPopChg();
        min = cMap.getMinAvgPopChg();
        breaks = [-2000, -1000, -500, -200, 0, 200, 500, 2000, 5000, 10000];
        if (min > 0) {
            min = -max;
        }
    }
    if (num === "5") {
        max = cMap.getMaxBirthRate();
        min = cMap.getMinBirthRate();
        median = cMap.getMedianBirthRate();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "6") {
        max = cMap.getMaxDeathRate();
        min = cMap.getMinDeathRate();
        median = cMap.getMedianDeathRate();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "7") {
        max = cMap.getMaxRateNaturalIncrease();
        min = cMap.getMinRateNaturalIncrease();
        breaks = [min * 0.5, min * 0.35, min * 0.2, min * 0.1, 0, max * 0.1, max * 0.2, max * 0.35, max * 0.5, max * 0.75];
    }
    if (num === "8") {
        max = cMap.getMaxMigrationRate();
        min = cMap.getMinMigrationRate();
        breaks = [min * 0.5, min * 0.35, min * 0.2, min * 0.1, 0, max * 0.1, max * 0.2, max * 0.35, max * 0.5, max * 0.75];
        if (min > 0) {
            min = -max;
        }
    }*/
    if (num === "1") {
        max = cMap.getMaxTtl("BBFS");
        min = cMap.getMinTtl("BBFS");
        median = cMap.getMedianTotal("BBFS");
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
   /*  if (num === "1") {
        max = cMap.getMaxTtlBBFS();
        min = cMap.getMinTtlBBFS();
        median = cMap.getMedianTotalBBFS();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    } 
    if (num === "2") {
        max = cMap.getMaxTtlCCPI();
        min = cMap.getMinTtlCCPI();
        median = cMap.getMedianTotalCCPI();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    } */
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
    /* if (num === "3") {
        max = cMap.getMaxTtlCDPGCV();
        min = cMap.getMinTtlCDPGCV();
        median = cMap.getMedianTotalCDPGCV();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "4") {
        max = cMap.getMaxTtlCDPGED();
        min = cMap.getMinTtlCDPGED();
        median = cMap.getMedianTotalCDPGED();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "5") {
        max = cMap.getMaxTtlCDBGPE();
        min = cMap.getMinTtlCDBGPE();
        median = cMap.getMedianTotalCDBGPE();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "6") {
        max = cMap.getMaxTtlCDBGPV();
        min = cMap.getMinTtlCDBGPV();
        median = cMap.getMedianTotalCDBGPV();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "7") {
        max = cMap.getMaxTtlCENS();
        min = cMap.getMinTtlCENS();
        median = cMap.getMedianTotalCCPI();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "8") {
        max = cMap.getMaxTtlCHPG();
        min = cMap.getMinTtlCHPG();
        median = cMap.getMedianTotalCHPG();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "9") {
        max = cMap.getMaxTtlCSBG();
        min = cMap.getMinTtlCSBG();
        median = cMap.getMedianTotalCSBG();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "10") {
        max = cMap.getMaxTtlCTF();
        min = cMap.getMinTtlCTF();
        median = cMap.getMedianTotalCTF();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "11") {
        max = cMap.getMaxTtlCVRF();
        min = cMap.getMinTtlCVRF();
        median = cMap.getMedianTotalCVRF();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    }
    if (num === "12") {
        max = cMap.getMaxTtlDCFA();
        min = cMap.getMinTtlDCFA();
        median = cMap.getMedianTotalDCFA();
        spreadl = median - min;
        spreadh = max - median;
        breaks = [(min + spreadl * (2 / 5)), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
    } */
    
    redraw_legend(min, max, num, breaks);

    geolayer.setStyle(function(d) {

        var value;
        var fips = parseInt(d.properties.COUNTYFP);
        //value = cMap.retrieveTtl(fips,Number(num));
        if (num === "1") {
            var program = "BBFS";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "2") {
            var program = "CCPI";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        }
        if (num === "3") {
            var program = "CDBGCV";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "4") {
            var program = "CDBGED";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "5") {
            var program = "CDBGPF";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "6") {
            var program = "CDBGPS";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "7") {
            var program = "CENS";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "8") {
            var program = "CHPG";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "9") {
            var program = "CSBG";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "10") {
            var program = "CTF";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "11") {
            var program = "CVRF";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        } 
        if (num === "12") {
            var program = "DCFA";
            value = cMap.retrieveTtl(fips,program);
            //value = cMap.retrieveTtlBBFS(fips);
        }  
        /* if (num === "1") {
            value = cMap.retrieveTtlBBFS(fips);
        } */
        /* if (num === "2") {
            value = cMap.retrieveTtlCCPI(fips);
        }
        if (num === "3") {
            value = cMap.retrieveTtlCDBGCV(fips);
        }
        if (num === "4") {
            value = cMap.retrieveTtlCDBGED(fips);
        }
        if (num === "5") {
            value = cMap.retrieveTtlCDBGPF(fips);
        }
        if (num === "6") {
            value = cMap.retrieveTtlCDBGPV(fips);
        }
        if (num === "7") {
            value = cMap.retrieveTtlCENS(fips);
        }
        if (num === "8") {
            value = cMap.retrieveTtlCHPG(fips);
        }
        if (num === "9") {
            value = cMap.retrieveTtlCSBG(fips);
        }
        if (num === "10") {
            value = cMap.retrieveTtlCTF(fips);
        }
        if (num === "11") {
            value = cMap.retrieveTtlCVRF(fips);
        }
        if (num === "12") {
            value = cMap.retrieveTtlDCFA(fips);
        } */

        //console.log(breaks[9]);
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
        /* if ((value > breaks[8]) && (value <= breaks[9])) {console.log(value); console.log(breaks[8]); console.log(breaks[9]);
            return {
                weight: 1,
                color: "grey",
                fillOpacity: 1,
                fillColor: "rgb(8,29,88)"
            };
        } */
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