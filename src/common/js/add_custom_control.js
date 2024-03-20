// @flow

var refreshdata = require("./refresh_data.js");


module.exports = function(map: Object, layer: Object, worker_data: any) {
    'use strict';

    //Custom Layer Control
    console.log("add custom control");
    var command: Object = L.control({
        position: 'topleft'
    });

    var yrs_data = worker_data[1];
    var main_data = worker_data[0];

    var queriedYears: string = "";

    for (let i = 0; i < yrs_data.length; i++) {
        queriedYears += "<option style='color:" + ((yrs_data[i].datatype === "Estimate") ? "black" : "black") + "' value='" + yrs_data[i].year + "'>" + yrs_data[i].year + "</option>";
    }

    command.onAdd = function() {
        var div = L.DomUtil.create('div', 'command bord');
        div.innerHTML = "Statistic:<br /><select id='stat'><option value='1'>BBFS</option><br />" +
            "<option value='2'>CCPI</option>"+
            "<option value='3'>CDBGCV</option>"+
            "<option value='4'>CDBGED</option>"+
            "<option value='5'>CDBGPF</option>"+
            "<option value='6'>CDBGPS</option>"+
            "<option value='7'>CENS</option>"+
            "<option value='8'>CHPG</option>"+
            "<option value='9'>CSBG</option>"+
            "<option value='10'>CTF</option>"+
            "<option value='11'>CVRF</option>"+
            "<option value='12'>DCFA</option>"+
            "</select><br />" +
            "<br />From:&nbsp;&nbsp;<select id='selfrom'>" + queriedYears + "</select>&nbsp;&nbsp;&nbsp;To:&nbsp;&nbsp;<select id='selto'>" + queriedYears + "</select>";
        div.padding = "20px";
        return div;
    };
    command.addTo(map);


    document.getElementById("stat").addEventListener("change", function() {
        refreshdata(layer, main_data);
    }, false);

    document.getElementById("selfrom").addEventListener("change", function() {
        refreshdata(layer, main_data);
    }, false);

    document.getElementById("selto").addEventListener("change", function() {
        refreshdata(layer, main_data);
    }, false);


    var a: Object = document.getElementsByClassName('leaflet-control-container')[0];

    a.addEventListener('dblclick', function(event) {
        event = event || window.event // cross-browser event
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    });

    a.addEventListener('mousemove', function(event) {
        event = event || window.event // cross-browser event
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    });


    function getJsonFromUrl() {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    //intialize!
    var querystring = getJsonFromUrl();

    if ('print' in querystring && 'stat' in querystring && 'from' in querystring && 'to' in querystring) {

        map.panTo(L.latLng(39.35, -104.3));

        let e: any = document.querySelector('#stat [value="' + querystring.stat + '"]');
        e.selected = true;
        let f: any = document.querySelector('#selfrom [value="' + querystring.from + '"]');
        f.selected = true;
        let g: any = document.querySelector('#selto [value="' + querystring.to + '"]');
        g.selected = true;
        document.getElementsByClassName('command')[0].style.display = 'none';
        document.getElementsByClassName('leaflet-top leaflet-right')[0].style.display = 'none';

        let stat_select: any = document.getElementById('stat');
        let stat_text: any = stat_select.options[stat_select.selectedIndex].text;

        let title_h2 = document.querySelector('.title h2');
        let selfrom: any = document.getElementById("selfrom");
        let selto: any = document.getElementById("selto");
        title_h2.innerHTML = "Colorado, " + selfrom.value + " to " + selto.value + ":&nbsp;&nbsp;" + stat_text;

        refreshdata(layer, main_data);
    } else {
        let e: any = document.querySelector('#selto [value="2024"]');
        e.selected = true;
        refreshdata(layer, main_data);

        require("./add_stat_caption.js")(map);
    }








}
