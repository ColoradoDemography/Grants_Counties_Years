var CMap = require("./init_object.js")();
var getUserInputs = require("./get_from_dom.js");
var filterData = require("./filter_data.js");



module.exports = function(e, worker_data, map) {

    var string_output = getUserInputs();


    filterData(worker_data, string_output[1], function(data) {

        var cMap = new CMap(data);


        var info_html = "<ul id='tabbedbrowsing' class='tab'><li><a href='#' id='tab_table' class='tablinks active'>Table</a></li></ul><div id='tablediv' class='tabcontent' style='display: block;'>" +

            "<br /><h2 style='text-align: center'>" + e.target.feature.properties.NAME + " County,&nbsp;&nbsp;" + cMap.first_year + " to " + cMap.last_year + "</h2><br /><table id='modaltable'>";

        var fips = parseInt(e.target.feature.properties.COUNTYFP, 10);

        var emphasize = " style='font-weight: 900'";

        info_html += "<tr><th>Grant</th><th>Dollars</th><th>Grant</th><th>Dollars</th></tr>";
        info_html += "<tr><td>American Rescue Plan Act: NEU:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "NEU")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Housing Incentive Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "IHOI")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Broadband Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "BBFS")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Housing Planning Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "IHOP")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Crime Prevention Initiative:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CCPI")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Limited Gaming Impact:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "GAME")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Development Block Grants - CV:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGCV")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Local Grant Match:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "LOMA")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Development Block Grants - ED:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGED")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Local Planning Capacity Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "LPC")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Development Block Grants - PF:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGPF")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Main Street:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "MS")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Development Block Grants - PS:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CDBGPS")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Main Street Open for Business:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "MSOB")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Census Outreach Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CENS")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Marijuana Enforcement Grey & Black Market:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "GBMJ")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Colorado Heritage Planning Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CHPG")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Marijuana Impact:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "MJ")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Colorado Search & Rescue:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "SAR")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Microgrids for Community Resilience:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "MCRG")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Colorado Search & Rescue Flexible Fund:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "BSARFX")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Migrant Response:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "MRP")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Community Services Block Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CSBG")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Peace Officer Mental Health Support:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "POMH")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Conservation Trust Fund:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CTF")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Pools Special Initiative:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "PSI")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Coronavirus Relief Funds:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "CVRF")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Rural Economic Development Initiative:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "REDI")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Defense Counsel on First Appearance:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "DCFA")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Small Business Relief:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "SBR")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Direct Distribution:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "SEV_FML")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Solar Grants:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "RNSS")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Energy Impact Assistance Fund:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "EIAF")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Strong Communities Grant:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "SCIG")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
        info_html += "<tr><td>Firefighter Cardiac Benefit:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "FCB")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + 
            "</td><td style='border-left: 1px solid black'>Volunteer Firefighter Pension Fund:</td><td style='text-align: right'>" + parseInt(cMap.retrieveTtl(fips, "VFP")).toLocaleString(undefined, {
            maximumFractionDigits: 0}) + "</td></tr>";
       
               

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