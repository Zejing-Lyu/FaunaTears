function Search() {
/*
@author: Ishika Wikramanayake
@start_date: 27-08-2019
@end_date: 13-09-2019
@description: Displays the endangered species images while typing
*/

    var category = decodeURIComponent(window.location.search);
    category = category.substring(10);

    var flag = 0;
    var row = document.getElementById("species");

    // remove all the children tags from the row tag
    while (row.firstChild) {
        row.removeChild(row.firstChild);
    }

    var newlist = [];
    for (i = 0; i < data.length; i++) {
      newlist[i] = data[i];
    }

    // sort the array of dictionaries in ascending order of the english name
    newlist.sort((a, b) => (a["Region"] > b["Region"]) ? 1 : -1);

    // get the typed words from the search box
    var input = document.getElementById("search");
    // convert to upper case
    var filter = input.value.toUpperCase();
    if (filter != "") {
        // check if only valid characters are used
        if (!filter.match(/^[A-Za-z\'\-\s]+$/)) {
            // if not display error message
            document.getElementById("error").innerHTML = "An invalid character was found.";
            document.getElementById("error").style.color = "red";
            document.getElementById("error").style.visibility = "visible";
        }
        else {
            document.getElementById("error").style.visibility = "hidden";

            // get the currently slected item index from all three filters
            var sortIndex = document.getElementById("sort-selected").selectedIndex;

            if (sortIndex == 0) {
                flag = sortLHSearch(newlist, flag, row, category, filter);
            }

            if (sortIndex == 1) {
                flag = sortHLSearch(newlist, flag, row, category, filter);
            }

            if (flag == 0) {
                var p = document.createElement("p");
                p.innerHTML = "No results found.";
                row.appendChild(p);
            }
                    
        }
    }
    else {
        document.getElementById("error").style.visibility = "hidden";
        changeData();
    }
}

function sortLHSearch(array, flag, row, category, filter) {
    var unique = {};
    if (category == "Australia") {
        for (var i = 0; i < array.length; i++) {
            var txtValue = array[i]["Region"];
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                flag = 1;
                unique = populateSpecies(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["State - parsed"] == category) {
                var txtValue = array[i]["Region"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    return flag;
}

function sortHLSearch(array, flag, row, category, filter) {
    var unique = {};
    if (category == "Australia") {

        for (var i = array.length - 1; i >= 0; i--) {
            var txtValue = array[i]["Region"];
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                flag = 1;
                unique = populateSpecies(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["State - parsed"] == category) {
                var txtValue = array[i]["Region"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    return flag;
}

