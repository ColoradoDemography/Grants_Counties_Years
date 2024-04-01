var CMap = require("./init_object.js")();
var getUserInputs = require("./get_from_dom.js");
var filterData = require("./filter_data.js");



module.exports = function(e, worker_data, map) {

    var string_output = getUserInputs();


    filterData(worker_data, string_output[0], function(data) {

        var cMap = new CMap(data);


        var info_html = "<ul id='tabbedbrowsing' class='tab'><li><a href='#' id='tab_table' class='tablinks active'>Table</a></li></ul><div id='tablediv' class='tabcontent' style='display: block;'>" +

            "<br /><h2 style='text-align: center'>" + e.target.feature.properties.NAME + " County,&nbsp;&nbsp;" + cMap.first_year + " to " + cMap.last_year + "</h2><br /><table id='modaltable'>";

        var fips = parseInt(e.target.feature.properties.COUNTYFP, 10);

        var emphasize = " style='font-weight: 900'";

        info_html += "<tr><th>Grant</th><th>Dollars</th></tr>";
        info_html += "<tr><td>BBFS:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "BBFS")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CCPI:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CCPI")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CDBGCV:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGCV")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CDBGED:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGED")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CDBGPF:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGPF")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CDBGPS:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGPS")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CENS:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CENS")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CHPG:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CHPG")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CSBG:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CSBG")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CTF:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CTF")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>CVRF:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CVRF")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        info_html += "<tr><td>DCFA:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "DCFA")).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td></tr>";
        /* info_html += "<tr" + ((string_output[1] === "1" || string_output[1] === "2") ? emphasize : "") + "><td>Total Population Change:</td><td style='text-align: right'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + cMap.retrieveTtlPopChg(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td style='text-align: right'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + parseFloat(cMap.retrievePctPopChg(fips)).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + " %</td></tr>";
        info_html += "<tr" + ((string_output[1] === "3" || string_output[1] === "4") ? emphasize : "") + "><td>Avg Population Change:</td><td style='text-align: right'>" + cMap.retrieveAvgPopChg(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td style='text-align: right'>" + parseFloat(cMap.retrieveAvgPctPopChg(fips)).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + " %</td></tr>";
        info_html += "<tr" + ((string_output[1] === "9") ? emphasize : "") + "><td>Total Births:</td><td style='text-align: right'>" + cMap.retrieveTtlBirths(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td></td></tr>";
        info_html += "<tr" + ((string_output[1] === "5") ? emphasize : "") + "><td>Birth Rate per 1,000 Pop:</td><td style='text-align: right'>" + cMap.retrieveBirthRate(fips).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + "</td><td></td></tr>";
        info_html += "<tr" + ((string_output[1] === "10") ? emphasize : "") + "><td>Total Deaths:</td><td style='text-align: right'>" + cMap.retrieveTtlDeaths(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td></td></tr>";
        info_html += "<tr" + ((string_output[1] === "6") ? emphasize : "") + "><td>Death Rate per 1,000 Pop:</td><td style='text-align: right'>" + cMap.retrieveDeathRate(fips).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + "</td><td></td></tr>";
        info_html += "<tr" + ((string_output[1] === "11" || string_output[1] === "7") ? emphasize : "") + "><td>Total Natural Increase:</td><td style='text-align: right'>" + cMap.retrieveNatIncrease(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td style='text-align: right'>" + cMap.retrieveRateNaturalIncrease(fips).toLocaleString(undefined, {
            maximumFractionDigits: 2
        }) + " %</td></tr>";
        info_html += "<tr" + ((string_output[1] === "12") ? emphasize : "") + "><td>Total Migration:</td><td style='text-align: right'>" + cMap.retrieveTtlMigration(fips).toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) + "</td><td></td></tr>";
        info_html += "<tr" + ((string_output[1] === "8") ? emphasize : "") + "><td>Migration Rate per 1,000:&nbsp;&nbsp;&nbsp;</td><td style='text-align: right'>" + cMap.retrieveMigrationRate(fips).toLocaleString(undefined, {
            maximumFractionDigits: 1
        }) + "</td><td></td></tr>"; */

        info_html += "</table><br /><div class='main_content' style='float: left;><div class='container'><button class='mbutton' id='dlthis''>Download Table</button></div></div><br /></div>" +

            "<div id='chartdiv' class='tabcontent'>" +

            "<br /><div id='chart_wrapper'><svg id='wf_chart'></svg></div><br /><div class='main_content'><div class='container'><button class='mbutton' id='t_download'>Download PNG</button><button class='mbutton' id='f_download' style='float: right;'>Full Size PNG</button></div></div><br /></div>";

        map.openModal({
            content: info_html
        });

        //d3 waterfall chart
        //require("./waterfall_chart.js")(cMap, fips, e.target.feature.properties.NAME + " County,  " + cMap.first_year + " to " + cMap.last_year);

        //modal event listeners
        require("./modal_event_listeners.js")(cMap, e);

    });

}