function findCategory(stateIndex) {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Set the heading title based on the state selected and return the category name
*/
    var category = "";

    if (stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Australia";
        category = "Australia";
    }

    if (stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Australian Capital Territory";
        category = "Australian Capital Territory";
    }

    if (stateIndex == 2) {
        document.getElementById("heading").innerHTML = "New South Wales";
        category = "New South Wales";
    }

    if (stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Northern Territory";
        category = "Northern Territory";
    }

    if (stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Queensland";
        category = "Queensland";
    }

    if (stateIndex == 5) {
        document.getElementById("heading").innerHTML = "South Australia";
        category = "South Australia";
    }

    if (stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Tasmania";
        category = "Tasmania";
    }

    if (stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Victoria";
        category = "Victoria";
    }

    if (stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Western Australia";
        category = "Western Australia";
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
    var pages = document.getElementById("pages");

    // Empty the search field when the filters are changed
    emptySearch();

    // get the indices of the selected items from the three filters
    var stateIndex = document.getElementById("states-selected").selectedIndex;
    var sortIndex = document.getElementById("sort-selected").selectedIndex;

    // Get the category
    var category = findCategory(stateIndex);

    // Update the page navigation
    pageNavigation(category);

    // Update the images displayed
    updateData();

}

function updateData() {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Update the images based on the filters selected
*/
    var pages = document.getElementById("pages");

    // Empty the search field when the filters are changed
    emptySearch();

    // get the indices of the selected items from the three filters
    var stateIndex = document.getElementById("states-selected").selectedIndex;
    var sortIndex = document.getElementById("sort-selected").selectedIndex;

    // Get the category 
    var category = findCategory(stateIndex);
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
    
    var pageNo = 0;
    var lowerLimit = 0;
    var upperLimit = 0;

    // Get the number of pages for the page navigation
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
        upperLimit = 15;
    }
    if (pageNo == 1) {
        lowerLimit = 0;
        upperLimit = 15;
    }

    if (pageNo > 1) {
        lowerLimit = 15 * (pageNo - 1);
        upperLimit = 15 * pageNo;
    }
    // If sort is A-Z
    if (sortIndex == 0) {
        flag = sortLH(newlist, flag, lowerLimit, upperLimit, row, category);
    }
    // If sort is Z-A
    if (sortIndex == 1) {
        flag = sortHL(newlist, flag, lowerLimit, upperLimit, row, category);
    }
    // If no species are found for the selected filters
    if (flag == 0) {
        var p = document.createElement("p");
        p.innerHTML = "No results found.";
        row.appendChild(p);
    }
    
}

function sortLH(array, flag, lowerLimit, upperLimit, row, category) {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Sort the data in acsending order of alphabetical order
*/
    var unique = {};
    if (category == "Australia") {

        for (var i = 0; i < array.length; i++) {
            flag = 1;
            // Create images for species based on page navigation selected
            if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
            }
            // Break if limit for page has been reached
            if (Object.keys(unique).length == upperLimit) {
                break;
            }
            // Create dummy data for previous pages
            if (Object.keys(unique).length < lowerLimit) {
                unique = populateDummyData(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["State - parsed"] == category) {
                flag = 1;
                // Create images for species based on page navigation selected
                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                // Break if limit for page has been reached
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                // Create dummy data for previous pages
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }

    return flag;
}

function sortHL(array, flag, lowerLimit, upperLimit, row,category) {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Sort the data in desending order of alphabetical order
*/
    var unique = {};
    if (category == "Australia") {

        for (var i = array.length - 1; i >= 0; i--) {
            flag = 1;
            // Create images for species based on page navigation selected
            if (Object.keys(unique).length >= lowerLimit) {
                unique = populateSpecies(i, row, unique, array[i]);
            }
            // Break if limit for page has been reached
            if (Object.keys(unique).length == upperLimit) {
                break;
            }
            // Create dummy data for previous pages
            if (Object.keys(unique).length < lowerLimit) {
                unique = populateDummyData(i, row, unique, array[i]);
            }
        }
    }

    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["State - parsed"] == category) {
                flag = 1;
                // Create images for species based on page navigation selected
                if (Object.keys(unique).length >= lowerLimit) {
                    unique = populateSpecies(i, row, unique, array[i]);
                }
                // Break if limit for page has been reached
                if (Object.keys(unique).length == upperLimit) {
                    break;
                }
                // Create dummy data for previous pages
                if (Object.keys(unique).length < lowerLimit) {
                    unique = populateDummyData(i, row, unique, array[i]);
                }
            }
        }
    }


    return flag;
}

