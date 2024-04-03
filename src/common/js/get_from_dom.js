module.exports = function() {

    var stat_val = "";
    var first_year = "";
    var last_year = "";
    var grant_val = "";

    var grant_element = document.getElementById("granttype"); 

    //chicken and the egg.  if this has been called before custom control was created
    if (grant_element === null) {
        stat_val = "1";
        first_year = "2012";
        last_year = "2024";
        grant_val = "1";
    } else {
        var stat_val = document.getElementById("stat");
        var from_element = document.getElementById("selfrom");
        var to_element = document.getElementById("selto");

        first_year = parseInt(from_element.options[from_element.selectedIndex].value);
        last_year = parseInt(to_element.options[to_element.selectedIndex].value);
        grant_val = grant_element.options[grant_element.selectedIndex].value;
    }

    var yearset = "";

    for (let i = first_year; i <= last_year; i++) {
        if (i !== first_year) {
            yearset += ",";
        }
        yearset += i;
    }

    if (yearset === "") {
        yearset = String(first_year)
    }

    return [stat_val, yearset, grant_val]

}