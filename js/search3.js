function Search() {
/*
@author: Ishika Wikramanayake
@start_date: 27-08-2019
@end_date: 13-09-2019
@description: Displays the endangered species images while typing
*/

    var speciesIndex = document.getElementById("species-selected").selectedIndex;
    var stateIndex = document.getElementById("states-selected").selectedIndex;

    var category = findCategory(speciesIndex, stateIndex);

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

    // sort the array of dictionaries in ascending order of the rank
    newlist.sort((a, b) => (a["Id"] > b["Id"]) ? 1 : -1);

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

            flag = sortSearch(newlist, flag, row, category, filter);

            if (flag == 0) {
                var p = document.createElement("p");
                p.innerHTML = "No results found.";
                row.appendChild(p);
            }
                    
        }
    }
    else {
        document.getElementById("error").style.visibility = "hidden";
        myFunction();
    }
}

function sortSearch(array, flag, row, category, filter) {
    var unique = {};
    if (category == "Australia") {
        for (var i = 0; i < array.length; i++) {
            var txtValue = array[i]["Organisation"];
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                flag = 1;
                unique = populateSpecies(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["State - parsed"] == category) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Plant Trees" || category == "Rescue Fauna" || category == "Spread Awareness" || category == "Attend Conservation Workshops" || category == "Donate" || category == "Citizen Science") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == category) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Plant Trees - Australian Capital Territory" || category == "Plant Trees - New South Wales" || category == "Plant Trees - Northern Territory" || category == "Plant Trees - Queensland" || category == "Plant Trees - South Australia" || category == "Plant Trees - Tasmania" || category == "Plant Trees - Victoria" || category == "Plant Trees - Western Australia") {
        var name = category.substring(14);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Plant Trees" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Rescue Fauna - Australian Capital Territory" || category == "Rescue Fauna - New South Wales" || category == "Rescue Fauna - Northern Territory" || category == "Rescue Fauna - Queensland" || category == "Rescue Fauna - South Australia" || category == "Rescue Fauna - Tasmania" || category == "Rescue Fauna - Victoria" || category == "Rescue Fauna - Western Australia") {
        var name = category.substring(15);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Rescue Fauna" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Spread Awareness - Australian Capital Territory" || category == "Spread Awareness - New South Wales" || category == "Spread Awareness - Northern Territory" || category == "Spread Awareness - Queensland" || category == "Spread Awareness - South Australia" || category == "Spread Awareness - Tasmania" || category == "Spread Awareness - Victoria" || category == "Spread Awareness - Western Australia") {
        var name = category.substring(19);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Spread Awareness" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Attend Conservation Workshops - Australian Capital Territory" || category == "Attend Conservation Workshops - New South Wales" || category == "Attend Conservation Workshops - Northern Territory" || category == "Attend Conservation Workshops - Queensland" || category == "Attend Conservation Workshops - South Australia" || category == "Attend Conservation Workshops - Tasmania" || category == "Attend Conservation Workshops - Victoria" || category == "Attend Conservation Workshops - Western Australia") {
        var name = category.substring(31);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Attend Conservation Workshops" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Donate - Australian Capital Territory" || category == "Donate - New South Wales" || category == "Donate - Northern Territory" || category == "Donate - Queensland" || category == "Donate - South Australia" || category == "Donate - Tasmania" || category == "Donate - Victoria" || category == "Donate - Western Australia") {
        var name = category.substring(9);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Donate" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Citizen Science - Australian Capital Territory" || category == "Citizen Science - New South Wales" || category == "Citizen Science - Northern Territory" || category == "Citizen Science - Queensland" || category == "Citizen Science - South Australia" || category == "Citizen Science - Tasmania" || category == "Citizen Science - Victoria" || category == "Citizen Science - Western Australia") {
        var name = category.substring(18);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Citizen Science" && array[i]["State - parsed"] == name) {
                var txtValue = array[i]["Organisation"];
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    flag = 1;
                    unique = populateSpecies(i, row, unique, array[i]);
                }
            }
        }
    }

    return flag;
}
