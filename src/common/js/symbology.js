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
            max = cMap.getMaxTtl("NEU");
            min = cMap.getMinTtl("NEU");
            median = cMap.getMedianTotal("NEU");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
            console.log(breaks);
        }
        if (num === "2") {
            max = cMap.getMaxTtl("BBFS");
            min = cMap.getMinTtl("BBFS");
            median = cMap.getMedianTotal("BBFS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "3") {
            max = cMap.getMaxTtl("CCPI");
            min = cMap.getMinTtl("CCPI");
            median = cMap.getMedianTotal("CCPI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "4") {
            max = cMap.getMaxTtl("CDBGCV");
            min = cMap.getMinTtl("CDBGCV");
            median = cMap.getMedianTotal("CDBGCV");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "5") {
            max = cMap.getMaxTtl("CDBGED");
            min = cMap.getMinTtl("CDBGED");
            median = cMap.getMedianTotal("CDBGED");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "6") {
            max = cMap.getMaxTtl("CDBGPS");
            min = cMap.getMinTtl("CDBGPS");
            median = cMap.getMedianTotal("CDBGPF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "7") {
            max = cMap.getMaxTtl("CDBGPV");
            min = cMap.getMinTtl("CDBGPV");
            median = cMap.getMedianTotal("CDBGPS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "8") {
            max = cMap.getMaxTtl("CENS");
            min = cMap.getMinTtl("CENS");
            median = cMap.getMedianTotal("CENS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "9") {
            max = cMap.getMaxTtl("CHPG");
            min = cMap.getMinTtl("CHPG");
            median = cMap.getMedianTotal("CHPG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "10") {
            max = cMap.getMaxTtl("SAR");
            min = cMap.getMinTtl("SAR");
            median = cMap.getMedianTotal("SAR");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "11") {
            max = cMap.getMaxTtl("BSARFX");
            min = cMap.getMinTtl("BSARFX");
            median = cMap.getMedianTotal("BSARFX");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "12") {
            max = cMap.getMaxTtl("CSBG");
            min = cMap.getMinTtl("CSBG");
            median = cMap.getMedianTotal("CSBG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "13") {
            max = cMap.getMaxTtl("CTF");
            min = cMap.getMinTtl("CTF");
            median = cMap.getMedianTotal("CTF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "14") {
            max = cMap.getMaxTtl("CVRF");
            min = cMap.getMinTtl("CVRF");
            median = cMap.getMedianTotal("CVRF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "15") {
            max = cMap.getMaxTtl("DCFA");
            min = cMap.getMinTtl("DCFA");
            median = cMap.getMedianTotal("DCFA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "16") {
            max = cMap.getMaxTtl("SEV_FML");
            min = cMap.getMinTtl("SEV_FML");
            median = cMap.getMedianTotal("SEV_FML");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "17") {
            max = cMap.getMaxTtl("EIAF");
            min = cMap.getMinTtl("EIAF");
            median = cMap.getMedianTotal("EIAF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "18") {
            max = cMap.getMaxTtl("FCB");
            min = cMap.getMinTtl("FCB");
            median = cMap.getMedianTotal("FCB");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "19") {
            max = cMap.getMaxTtl("IHOI");
            min = cMap.getMinTtl("IHOI");
            median = cMap.getMedianTotal("IHOI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "20") {
            max = cMap.getMaxTtl("IHOP");
            min = cMap.getMinTtl("IHOP");
            median = cMap.getMedianTotal("IHOP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "21") {
            max = cMap.getMaxTtl("GAME");
            min = cMap.getMinTtl("GAME");
            median = cMap.getMedianTotal("GAME");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "22") {
            max = cMap.getMaxTtl("LOMA");
            min = cMap.getMinTtl("LOMA");
            median = cMap.getMedianTotal("LOMA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "23") {
            max = cMap.getMaxTtl("LPC");
            min = cMap.getMinTtl("LPC");
            median = cMap.getMedianTotal("LPC");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "24") {
            max = cMap.getMaxTtl("MS");
            min = cMap.getMinTtl("MS");
            median = cMap.getMedianTotal("MS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "25") {
            max = cMap.getMaxTtl("MSOB");
            min = cMap.getMinTtl("MSOB");
            median = cMap.getMedianTotal("MSOB");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "26") {
            max = cMap.getMaxTtl("GBMJ");
            min = cMap.getMinTtl("GBMJ");
            median = cMap.getMedianTotal("GBMJ");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "27") {
            max = cMap.getMaxTtl("MJ");
            min = cMap.getMinTtl("MJ");
            median = cMap.getMedianTotal("MJ");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "28") {
            max = cMap.getMaxTtl("MCRG");
            min = cMap.getMinTtl("MCRG");
            median = cMap.getMedianTotal("MCRG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "29") {
            max = cMap.getMaxTtl("MRP");
            min = cMap.getMinTtl("MRP");
            median = cMap.getMedianTotal("MRP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "30") {
            max = cMap.getMaxTtl("POMH");
            min = cMap.getMinTtl("POMH");
            median = cMap.getMedianTotal("POMH");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "31") {
            max = cMap.getMaxTtl("PSI");
            min = cMap.getMinTtl("PSI");
            median = cMap.getMedianTotal("PSI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "32") {
            max = cMap.getMaxTtl("REDI");
            min = cMap.getMinTtl("REDI");
            median = cMap.getMedianTotal("REDI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "33") {
            max = cMap.getMaxTtl("SBR");
            min = cMap.getMinTtl("SBR");
            median = cMap.getMedianTotal("SBR");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "34") {
            max = cMap.getMaxTtl("RNSS");
            min = cMap.getMinTtl("RNSS");
            median = cMap.getMedianTotal("RNSS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "35") {
            max = cMap.getMaxTtl("SCIG");
            min = cMap.getMinTtl("SCIG");
            median = cMap.getMedianTotal("SCIG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "36") {
            max = cMap.getMaxTtl("VFP");
            min = cMap.getMinTtl("VFP");
            median = cMap.getMedianTotal("VFP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }

        redraw_legend(min, max, num, breaks);

        geolayer.setStyle(function(d) {

            var value;
            var fips = parseInt(d.properties.COUNTYFP);
            
            if (num === "1") {
                var program = "NEU";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "2") {
                var program = "BBFS";
                value = cMap.retrieveTtl(fips,program);
            }
            if (num === "3") {
                var program = "CCPI";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "4") {
                var program = "CDBGCV";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "5") {
                var program = "CDBGED";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "6") {
                var program = "CDBGPF";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "7") {
                var program = "CDBGPS";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "8") {
                var program = "CENS";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "9") {
                var program = "CHPG";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "10") {
                var program = "SAR";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "11") {
                var program = "BSARFX";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "12") {
                var program = "CSBG";
                value = cMap.retrieveTtl(fips,program);
            } 
            if (num === "13") {
                var program = "CTF";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "14") {
                var program = "CVRF";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "15") {
                var program = "DCFA";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "16") {
                var program = "SEV_FML";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "17") {
                var program = "EIAF";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "18") {
                var program = "FCB";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "19") {
                var program = "IHOI";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "20") {
                var program = "IHOP";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "21") {
                var program = "GAME";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "22") {
                var program = "LOMA";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "23") {
                var program = "LPC";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "24") {
                var program = "MS";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "25") {
                var program = "MSOB";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "26") {
                var program = "GBMJ";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "27") {
                var program = "MJ";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "28") {
                var program = "MCRG";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "29") {
                var program = "MRP";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "30") {
                var program = "POMH";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "31") {
                var program = "PSI";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "32") {
                var program = "REDI";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "33") {
                var program = "SBR";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "34") {
                var program = "RNSS";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "35") {
                var program = "SCIG";
                value = cMap.retrieveTtl(fips,program);
            }  
            if (num === "36") {
                var program = "VFP";
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
            max = cMap.getMaxPct("NEU");
            min = cMap.getMinPct("NEU");
            median = cMap.getMedianPct("NEU");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
            console.log(breaks);
        }
        if (num === "2") {
            max = cMap.getMaxPct("BBFS");
            min = cMap.getMinPct("BBFS");
            median = cMap.getMedianPct("BBFS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "3") {
            max = cMap.getMaxPct("CCPI");
            min = cMap.getMinPct("CCPI");
            median = cMap.getMedianPct("CCPI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "4") {
            max = cMap.getMaxPct("CDBGCV");
            min = cMap.getMinPct("CDBGCV");
            median = cMap.getMedianPct("CDBGCV");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "5") {
            max = cMap.getMaxPct("CDBGED");
            min = cMap.getMinPct("CDBGED");
            median = cMap.getMedianPct("CDBGED");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "6") {
            max = cMap.getMaxPct("CDBGPF");
            min = cMap.getMinPct("CDBGPF");
            median = cMap.getMedianPct("CDBGPF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "7") {
            max = cMap.getMaxPct("CDBGPS");
            min = cMap.getMinPct("CDBGPS");
            median = cMap.getMedianPct("CDBGPS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "8") {
            max = cMap.getMaxPct("CENS");
            min = cMap.getMinPct("CENS");
            median = cMap.getMedianPct("CENS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "9") {
            max = cMap.getMaxPct("CHPG");
            min = cMap.getMinPct("CHPG");
            median = cMap.getMedianPct("CHPG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "10") {
            max = cMap.getMaxPct("SAR");
            min = cMap.getMinPct("SAR");
            median = cMap.getMedianPct("SAR");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "11") {
            max = cMap.getMaxPct("BSARFX");
            min = cMap.getMinPct("BSARFX");
            median = cMap.getMedianPct("BSARFX");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "12") {
            max = cMap.getMaxPct("CSBG");
            min = cMap.getMinPct("CSBG");
            median = cMap.getMedianPct("CSBG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "13") {
            max = cMap.getMaxPct("CTF");
            min = cMap.getMinPct("CTF");
            median = cMap.getMedianPct("CTF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "14") {
            max = cMap.getMaxPct("CVRF");
            min = cMap.getMinPct("CVRF");
            median = cMap.getMedianPct("CVRF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "15") {
            max = cMap.getMaxPct("DCFA");
            min = cMap.getMinPct("DCFA");
            median = cMap.getMedianPct("DCFA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "16") {
            max = cMap.getMaxPct("SEV_FML");
            min = cMap.getMinPct("SEV_FML");
            median = cMap.getMedianPct("SEV_FML");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "17") {
            max = cMap.getMaxPct("EIAF");
            min = cMap.getMinPct("EIAF");
            median = cMap.getMedianPct("EIAF");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "18") {
            max = cMap.getMaxPct("FCB");
            min = cMap.getMinPct("FCB");
            median = cMap.getMedianPct("FCB");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "19") {
            max = cMap.getMaxPct("IHOI");
            min = cMap.getMinPct("IHOI");
            median = cMap.getMedianPct("IHOI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "20") {
            max = cMap.getMaxPct("IHOP");
            min = cMap.getMinPct("IHOP");
            median = cMap.getMedianPct("IHOP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "21") {
            max = cMap.getMaxPct("GAME");
            min = cMap.getMinPct("GAME");
            median = cMap.getMedianPct("GAME");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "22") {
            max = cMap.getMaxPct("LOMA");
            min = cMap.getMinPct("LOMA");
            median = cMap.getMedianPct("LOMA");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "23") {
            max = cMap.getMaxPct("LPC");
            min = cMap.getMinPct("LPC");
            median = cMap.getMedianPct("LPC");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "24") {
            max = cMap.getMaxPct("MS");
            min = cMap.getMinPct("MS");
            median = cMap.getMedianPct("MS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "25") {
            max = cMap.getMaxPct("MSOB");
            min = cMap.getMinPct("MSOB");
            median = cMap.getMedianPct("MSOB");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "26") {
            max = cMap.getMaxPct("GBMJ");
            min = cMap.getMinPct("GBMJ");
            median = cMap.getMedianPct("GBMJ");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "27") {
            max = cMap.getMaxPct("MJ");
            min = cMap.getMinPct("MJ");
            median = cMap.getMedianPct("MJ");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "28") {
            max = cMap.getMaxPct("MCRG");
            min = cMap.getMinPct("MCRG");
            median = cMap.getMedianPct("MCRG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "29") {
            max = cMap.getMaxPct("MRP");
            min = cMap.getMinPct("MRP");
            median = cMap.getMedianPct("MRP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "30") {
            max = cMap.getMaxPct("POMH");
            min = cMap.getMinPct("POMH");
            median = cMap.getMedianPct("POMH");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "31") {
            max = cMap.getMaxPct("PSI");
            min = cMap.getMinPct("PSI");
            median = cMap.getMedianPct("PSI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "32") {
            max = cMap.getMaxPct("REDI");
            min = cMap.getMinPct("REDI");
            median = cMap.getMedianPct("REDI");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "33") {
            max = cMap.getMaxPct("SBR");
            min = cMap.getMinPct("SBR");
            median = cMap.getMedianPct("SBR");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "34") {
            max = cMap.getMaxPct("RNSS");
            min = cMap.getMinPct("RNSS");
            median = cMap.getMedianPct("RNSS");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "35") {
            max = cMap.getMaxPct("SCIG");
            min = cMap.getMinPct("SCIG");
            median = cMap.getMedianPct("SCIG");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        if (num === "36") {
            max = cMap.getMaxPct("VFP");
            min = cMap.getMinPct("VFP");
            median = cMap.getMedianPct("VFP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
        /* if (num === "37") {
            max = cMap.getMaxTtl("VFP");
            min = cMap.getMinTtl("VFP");
            median = cMap.getMedianTotal("VFP");
            spreadl = median - min;
            spreadh = max - median;
            breaks = [(0), (min + spreadl * (3 / 5)), (min + spreadl * (4 / 5)), (min + spreadl * (9 / 10)), median, (median + spreadh * (1 / 12)), (median + spreadh * (1 / 6)), (median + spreadh * (2 / 6)), (median + spreadh * (3 / 6)), (median + spreadh * (4 / 6))];
        }
 */
        redraw_legend(min, max, num, breaks);

        geolayer.setStyle(function(d) {

            var value;
            var fips = parseInt(d.properties.COUNTYFP);
            
            if (num === "1") {
                var program = "NEU";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "2") {
                var program = "BBFS";
                value = cMap.retrievePctGrants(fips,program);
            }
            if (num === "3") {
                var program = "CCPI";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "4") {
                var program = "CDBGCV";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "5") {
                var program = "CDBGED";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "6") {
                var program = "CDBGPF";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "7") {
                var program = "CDBGPS";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "8") {
                var program = "CENS";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "9") {
                var program = "CHPG";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "10") {
                var program = "SAR";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "11") {
                var program = "BSARFX";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "12") {
                var program = "CSBG";
                value = cMap.retrievePctGrants(fips,program);
            } 
            if (num === "13") {
                var program = "CTF";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "14") {
                var program = "CVRF";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "15") {
                var program = "DCFA";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "16") {
                var program = "SEV_FML";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "17") {
                var program = "EIAF";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "18") {
                var program = "FCB";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "19") {
                var program = "IHOI";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "20") {
                var program = "IHOP";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "21") {
                var program = "GAME";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "22") {
                var program = "LOMA";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "23") {
                var program = "LPC";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "24") {
                var program = "MS";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "25") {
                var program = "MSOB";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "26") {
                var program = "GBMJ";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "27") {
                var program = "MJ";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "28") {
                var program = "MCRG";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "29") {
                var program = "MRP";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "30") {
                var program = "POMH";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "31") {
                var program = "PSI";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "32") {
                var program = "REDI";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "33") {
                var program = "SBR";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "34") {
                var program = "RNSS";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "35") {
                var program = "SCIG";
                value = cMap.retrievePctGrants(fips,program);
            }  
            if (num === "36") {
                var program = "VFP";
                value = cMap.retrievePctGrants(fips,program);
            }  
            /* if (num === "37") {
                var program = "VFP";
                value = cMap.retrieveTtl(fips,program);
            }  */  
        
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