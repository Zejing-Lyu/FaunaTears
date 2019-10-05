function findCategory(speciesIndex, stateIndex) {

    var category = "";

    if (speciesIndex == 0 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Australia";
        category = "Australia";
    }

    if (speciesIndex == 0 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Australian Capital Territory";
        category = "Australian Capital Territory";
    }

    if (speciesIndex == 0 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "New South Wales";
        category = "New South Wales";
    }

    if (speciesIndex == 0 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Northern Territory";
        category = "Northern Territory";
    }

    if (speciesIndex == 0 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Queensland";
        category = "Queensland";
    }

    if (speciesIndex == 0 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "South Australia";
        category = "South Australia";
    }

    if (speciesIndex == 0 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Tasmania";
        category = "Tasmania";
    }

    if (speciesIndex == 0 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Victoria";
        category = "Victoria";
    }

    if (speciesIndex == 0 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Western Australia";
        category = "Western Australia";
    }

    if (speciesIndex == 1 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Amphibia";
        category = "Amphibia";
    }

    if (speciesIndex == 1 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Amphibia - Australian Capital Territory";
        category = "Amphibia - Australian Capital Territory";
    }

    if (speciesIndex == 1 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Amphibia - New South Wales";
        category = "Amphibia - New South Wales";
    }

    if (speciesIndex == 1 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Amphibia - Northern Territory";
        category = "Amphibia - Northern Territory";
    }

    if (speciesIndex == 1 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Amphibia - Queensland";
        category = "Amphibia - Queensland";
    }

    if (speciesIndex == 1 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Amphibia - South Australia";
        category = "Amphibia - South Australia";
    }

    if (speciesIndex == 1 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Amphibia - Tasmania";
        category = "Amphibia - Tasmania";
    }

    if (speciesIndex == 1 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Amphibia - Victoria";
        category = "Amphibia - Victoria";
    }

    if (speciesIndex == 1 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Amphibia - Western Australia";
        category = "Amphibia - Western Australia";
    }


    if (speciesIndex == 2 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Mammalia";
        category = "Mammalia";
    }

    if (speciesIndex == 2 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Mammalia - Australian Capital Territory";
        category = "Mammalia - Australian Capital Territory";
    }

    if (speciesIndex == 2 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Mammalia - New South Wales";
        category = "Mammalia - New South Wales";
    }

    if (speciesIndex == 2 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Mammalia - Northern Territory";
        category = "Mammalia - Northern Territory";
    }

    if (speciesIndex == 2 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Mammalia - Queensland";
        category = "Mammalia - Queensland";
    }

    if (speciesIndex == 2 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Mammalia - South Australia";
        category = "Mammalia - South Australia";
    }

    if (speciesIndex == 2 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Mammalia - Tasmania";
        category = "Mammalia - Tasmania";
    }

    if (speciesIndex == 2 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Mammalia - Victoria";
        category = "Mammalia - Victoria";
    }

    if (speciesIndex == 2 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Mammalia - Western Australia";
        category = "Mammalia - Western Australia";
    }

    if (speciesIndex == 3 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Reptilia";
        category = "Reptilia";
    }

    if (speciesIndex == 3 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Reptilia - Australian Capital Territory";
        category = "Reptilia - Australian Capital Territory";
    }

    if (speciesIndex == 3 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Reptilia - New South Wales";
        category = "Reptilia - New South Wales";
    }

    if (speciesIndex == 3 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Reptilia - Northern Territory";
        category = "Reptilia - Northern Territory";
    }

    if (speciesIndex == 3 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Reptilia - Queensland";
        category = "Reptilia - Queensland";
    }

    if (speciesIndex == 3 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Reptilia - South Australia";
        category = "Reptilia - South Australia";
    }

    if (speciesIndex == 3 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Reptilia - Tasmania";
        category = "Reptilia - Tasmania";
    }

    if (speciesIndex == 3 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Reptilia - Victoria";
        category = "Reptilia - Victoria";
    }

    if (speciesIndex == 3 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Reptilia - Western Australia";
        category = "Reptilia - Western Australia";
    }

    return category;
}



function changeData() {
/*
@author: Ishika Wikramanayake
@start_date: 13-09-2019
@end_date: 13-09-2019
@description: Opens the index.html page and passes the variable "value"
*/

    //alert("test");
    var pages = document.getElementById("pages");
    
    emptySearch();

    // get the indices of the selected items from the three filters
    var speciesIndex = document.getElementById("species-selected").selectedIndex;
    var stateIndex = document.getElementById("states-selected").selectedIndex;
    var sortIndex = document.getElementById("sort-selected").selectedIndex;

    var category = findCategory(speciesIndex, stateIndex);

    //alert("test");
    pageNavigation(category);
    updateData();

}

function updateData() {

    //alert("test");
    var pages = document.getElementById("pages");
    
    emptySearch();

    // get the indices of the selected items from the three filters
    var speciesIndex = document.getElementById("species-selected").selectedIndex;
    var stateIndex = document.getElementById("states-selected").selectedIndex;
    var sortIndex = document.getElementById("sort-selected").selectedIndex;

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
    newlist.sort((a, b) => (a["Rank"] > b["Rank"]) ? 1 : -1);

    var newlist2 = [];
    for (i = 0; i < data.length; i++) {
      newlist2[i] = data[i];
    }

    // sort the array of dictionaries in ascending order of the english name
    newlist2.sort((a, b) => (a["Vernacular name - original"] > b["Vernacular name - original"]) ? 1 : -1);
    
    var pageNo = 0;
    var lowerLimit = 0;
    var upperLimit = 0;

    if (pages.getAttribute("class") == "pagination") {
        for (var i = 1; i < pages.childElementCount - 1; i++) {
            if (pages.childNodes[i].getAttribute("class") == "page-item active") {
                pageNo = i;
                break;
            }
        }
    }

    if (pageNo == 0) {
        lowerLimit = 0;
        upperLimit = 12;
    }

    if (pageNo == 1) {
        lowerLimit = 0;
        upperLimit = 12;
    }

    if (pageNo == 2) {
        lowerLimit = 12;
        upperLimit = 24;
    }

    if (pageNo == 3) {
        lowerLimit = 24;
        upperLimit = 36;
    }

    if (pageNo == 4) {
        lowerLimit = 36;
        upperLimit = 48;
    }

    if (pageNo == 5) {
        lowerLimit = 48;
        upperLimit = 60;
    }

    if (pageNo == 6) {
        lowerLimit = 60;
        upperLimit = 72;
    }

    if (pageNo == 7) {
        lowerLimit = 72;
        upperLimit = 84;
    }

    if (pageNo == 8) {
        lowerLimit = 84;
        upperLimit = 96;
    }

    if (pageNo == 9) {
        lowerLimit = 96;
        upperLimit = 108;
    }

    if (pageNo == 10) {
        lowerLimit = 108;
        upperLimit = 120;
    }

    if (pageNo == 11) {
        lowerLimit = 120;
        upperLimit = 128;
    }

    if (sortIndex == 0) {
        flag = sortLH(newlist, flag, lowerLimit, upperLimit, row, category);
    }

    if (sortIndex == 1) {
        flag = sortHL(newlist, flag, lowerLimit, upperLimit, row, category);
    }

    if (sortIndex == 2) {
        flag = sortLH(newlist2, flag, lowerLimit, upperLimit, row, category);
    }

    if (sortIndex == 3) {
        flag = sortHL(newlist2, flag, lowerLimit, upperLimit, row, category);
    }

    if (flag == 0) {
        var p = document.createElement("p");
        p.innerHTML = "No results found.";
        row.appendChild(p);
    }
    
}

function sortLH(array, flag, lowerLimit, upperLimit, row, category) {
    var unique = {};
    if (category == "Australia") {

        for (var i = 0; i < array.length; i++) {
            flag = 1;

            if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
            }
            if (Object.keys(unique).length == upperLimit) {
                break;
            }
            if (Object.keys(unique).length < lowerLimit) {
                unique = populateDummyData(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["State - parsed"] == category) {
                flag = 1;
                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Amphibia" || category == "Mammalia" || category == "Reptilia") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Class"] == category) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Amphibia - Australian Capital Territory" || category == "Amphibia - New South Wales" || category == "Amphibia - Northern Territory" || category == "Amphibia - Queensland" || category == "Amphibia - South Australia" || category == "Amphibia - Tasmania" || category == "Amphibia - Victoria" || category == "Amphibia - Western Australia") {
        var name = category.substring(11);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Class"] == "Amphibia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Mammalia - Australian Capital Territory" || category == "Mammalia - New South Wales" || category == "Mammalia - Northern Territory" || category == "Mammalia - Queensland" || category == "Mammalia - South Australia" || category == "Mammalia - Tasmania" || category == "Mammalia - Victoria" || category == "Mammalia - Western Australia") {
        var name = category.substring(11);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Class"] == "Mammalia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Reptilia - Australian Capital Territory" || category == "Reptilia - New South Wales" || category == "Reptilia - Northern Territory" || category == "Reptilia - Queensland" || category == "Reptilia - South Australia" || category == "Reptilia - Tasmania" || category == "Reptilia - Victoria" || category == "Reptilia - Western Australia") {
        var name = category.substring(11);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Class"] == "Reptilia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    return flag;
}

function sortHL(array, flag, lowerLimit, upperLimit, row,category) {
    var unique = {};
    if (category == "Australia") {

        for (var i = array.length - 1; i >= 0; i--) {
            flag = 1;

            if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
            }
            if (Object.keys(unique).length == upperLimit) {
                break;
            }
            if (Object.keys(unique).length < lowerLimit) {
                unique = populateDummyData(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["State - parsed"] == category) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Amphibia" || category == "Mammalia" || category == "Reptilia") {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Class"] == category) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Amphibia - Australian Capital Territory" || category == "Amphibia - New South Wales" || category == "Amphibia - Northern Territory" || category == "Amphibia - Queensland" || category == "Amphibia - South Australia" || category == "Amphibia - Tasmania" || category == "Amphibia - Victoria" || category == "Amphibia - Western Australia") {
        var name = category.substring(11);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Class"] == "Amphibia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Mammalia - Australian Capital Territory" || category == "Mammalia - New South Wales" || category == "Mammalia - Northern Territory" || category == "Mammalia - Queensland" || category == "Mammalia - South Australia" || category == "Mammalia - Tasmania" || category == "Mammalia - Victoria" || category == "Mammalia - Western Australia") {
        var name = category.substring(11);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Class"] == "Mammalia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    if (category == "Reptilia - Australian Capital Territory" || category == "Reptilia - New South Wales" || category == "Reptilia - Northern Territory" || category == "Reptilia - Queensland" || category == "Reptilia - South Australia" || category == "Reptilia - Tasmania" || category == "Reptilia - Victoria" || category == "Reptilia - Western Australia") {
        var name = category.substring(11);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Class"] == "Reptilia" && array[i]["State - parsed"] == name) {
                flag = 1;

                if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
                }
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }


    return flag;
}

