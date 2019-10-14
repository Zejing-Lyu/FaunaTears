function findCategory(speciesIndex, stateIndex) {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Set the heading title based on the actity and state selected and return the category name
*/
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
        document.getElementById("heading").innerHTML = "Plant Trees";
        category = "Plant Trees";
    }

    if (speciesIndex == 1 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Plant Trees - Australian Capital Territory";
        category = "Plant Trees - Australian Capital Territory";
    }

    if (speciesIndex == 1 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Plant Trees - New South Wales";
        category = "Plant Trees - New South Wales";
    }

    if (speciesIndex == 1 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Plant Trees - Northern Territory";
        category = "Plant Trees - Northern Territory";
    }

    if (speciesIndex == 1 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Plant Trees - Queensland";
        category = "Plant Trees - Queensland";
    }

    if (speciesIndex == 1 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Plant Trees - South Australia";
        category = "Plant Trees - South Australia";
    }

    if (speciesIndex == 1 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Plant Trees - Tasmania";
        category = "Plant Trees - Tasmania";
    }

    if (speciesIndex == 1 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Plant Trees - Victoria";
        category = "Plant Trees - Victoria";
    }

    if (speciesIndex == 1 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Plant Trees - Western Australia";
        category = "Plant Trees - Western Australia";
    }


    if (speciesIndex == 2 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Rescue Fauna";
        category = "Rescue Fauna";
    }

    if (speciesIndex == 2 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Australian Capital Territory";
        category = "Rescue Fauna - Australian Capital Territory";
    }

    if (speciesIndex == 2 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - New South Wales";
        category = "Rescue Fauna - New South Wales";
    }

    if (speciesIndex == 2 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Northern Territory";
        category = "Rescue Fauna - Northern Territory";
    }

    if (speciesIndex == 2 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Queensland";
        category = "Rescue Fauna - Queensland";
    }

    if (speciesIndex == 2 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - South Australia";
        category = "Rescue Fauna - South Australia";
    }

    if (speciesIndex == 2 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Tasmania";
        category = "Rescue Fauna - Tasmania";
    }

    if (speciesIndex == 2 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Victoria";
        category = "Rescue Fauna - Victoria";
    }

    if (speciesIndex == 2 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Rescue Fauna - Western Australia";
        category = "Rescue Fauna - Western Australia";
    }

    if (speciesIndex == 3 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Spread Awareness";
        category = "Spread Awareness";
    }

    if (speciesIndex == 3 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Australian Capital Territory";
        category = "Spread Awareness - Australian Capital Territory";
    }

    if (speciesIndex == 3 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Spread Awareness - New South Wales";
        category = "Spread Awareness - New South Wales";
    }

    if (speciesIndex == 3 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Northern Territory";
        category = "Spread Awareness - Northern Territory";
    }

    if (speciesIndex == 3 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Queensland";
        category = "Spread Awareness - Queensland";
    }

    if (speciesIndex == 3 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Spread Awareness - South Australia";
        category = "Spread Awareness - South Australia";
    }

    if (speciesIndex == 3 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Tasmania";
        category = "Spread Awareness - Tasmania";
    }

    if (speciesIndex == 3 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Victoria";
        category = "Spread Awareness - Victoria";
    }

    if (speciesIndex == 3 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Western Australia";
        category = "Spread Awareness - Western Australia";
    }



    if (speciesIndex == 4 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Spread Awareness";
        category = "Attend Conservation Workshops";
    }

    if (speciesIndex == 4 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Australian Capital Territory";
        category = "Attend Conservation Workshops - Australian Capital Territory";
    }

    if (speciesIndex == 4 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Spread Awareness - New South Wales";
        category = "Attend Conservation Workshops - New South Wales";
    }

    if (speciesIndex == 4 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Northern Territory";
        category = "Attend Conservation Workshops - Northern Territory";
    }

    if (speciesIndex == 4 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Queensland";
        category = "Attend Conservation Workshops - Queensland";
    }

    if (speciesIndex == 4 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Spread Awareness - South Australia";
        category = "Attend Conservation Workshops - South Australia";
    }

    if (speciesIndex == 4 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Tasmania";
        category = "Attend Conservation Workshops - Tasmania";
    }

    if (speciesIndex == 4 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Victoria";
        category = "Attend Conservation Workshops - Victoria";
    }

    if (speciesIndex == 4 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Western Australia";
        category = "Attend Conservation Workshops - Western Australia";
    }




    if (speciesIndex == 5 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Spread Awareness";
        category = "Donate";
    }

    if (speciesIndex == 5 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Australian Capital Territory";
        category = "Donate - Australian Capital Territory";
    }

    if (speciesIndex == 5 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Spread Awareness - New South Wales";
        category = "Donate - New South Wales";
    }

    if (speciesIndex == 5 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Northern Territory";
        category = "Donate - Northern Territory";
    }

    if (speciesIndex == 5 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Queensland";
        category = "Donate - Queensland";
    }

    if (speciesIndex == 5 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Spread Awareness - South Australia";
        category = "Donate - South Australia";
    }

    if (speciesIndex == 5 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Tasmania";
        category = "Donate - Tasmania";
    }

    if (speciesIndex == 5 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Victoria";
        category = "Donate - Victoria";
    }

    if (speciesIndex == 5 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Western Australia";
        category = "Donate - Western Australia";
    }



    if (speciesIndex == 6 && stateIndex == 0) {
        document.getElementById("heading").innerHTML = "Spread Awareness";
        category = "Citizen Science";
    }

    if (speciesIndex == 6 && stateIndex == 1) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Australian Capital Territory";
        category = "Citizen Science - Australian Capital Territory";
    }

    if (speciesIndex == 6 && stateIndex == 2) {
        document.getElementById("heading").innerHTML = "Spread Awareness - New South Wales";
        category = "Citizen Science - New South Wales";
    }

    if (speciesIndex == 6 && stateIndex == 3) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Northern Territory";
        category = "Citizen Science - Northern Territory";
    }

    if (speciesIndex == 6 && stateIndex == 4) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Queensland";
        category = "Citizen Science - Queensland";
    }

    if (speciesIndex == 6 && stateIndex == 5) {
        document.getElementById("heading").innerHTML = "Spread Awareness - South Australia";
        category = "Citizen Science - South Australia";
    }

    if (speciesIndex == 6 && stateIndex == 6) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Tasmania";
        category = "Citizen Science - Tasmania";
    }

    if (speciesIndex == 6 && stateIndex == 7) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Victoria";
        category = "Citizen Science - Victoria";
    }

    if (speciesIndex == 6 && stateIndex == 8) {
        document.getElementById("heading").innerHTML = "Spread Awareness - Western Australia";
        category = "Citizen Science - Western Australia";
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

    // get the indices of the selected items from the three filters
    var speciesIndex = document.getElementById("species-selected").selectedIndex;
    var stateIndex = document.getElementById("states-selected").selectedIndex;

    // Get the category
    var category = findCategory(speciesIndex, stateIndex);

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

    // get the indices of the selected items from the three filters
    var speciesIndex = document.getElementById("species-selected").selectedIndex;
    var stateIndex = document.getElementById("states-selected").selectedIndex;
    var sortIndex = document.getElementById("sort-selected").selectedIndex;

    // Get the category 
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
    newlist.sort((a, b) => (a["Organisation"] > b["Organisation"]) ? 1 : -1);
    
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
        upperLimit = 10;
    }
    if (pageNo == 1) {
        lowerLimit = 0;
        upperLimit = 10;
    }

    if (pageNo == 2) {
        lowerLimit = 10;
        upperLimit = 20;
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

    if (category == "Plant Trees" || category == "Rescue Fauna" || category == "Spread Awareness" || category == "Attend Conservation Workshops" || category == "Donate" || category == "Citizen Science") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == category) {
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

    if (category == "Plant Trees - Australian Capital Territory" || category == "Plant Trees - New South Wales" || category == "Plant Trees - Northern Territory" || category == "Plant Trees - Queensland" || category == "Plant Trees - South Australia" || category == "Plant Trees - Tasmania" || category == "Plant Trees - Victoria" || category == "Plant Trees - Western Australia") {
        var name = category.substring(14);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Plant Trees" && array[i]["State - parsed"] == name) {
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

    if (category == "Rescue Fauna - Australian Capital Territory" || category == "Rescue Fauna - New South Wales" || category == "Rescue Fauna - Northern Territory" || category == "Rescue Fauna - Queensland" || category == "Rescue Fauna - South Australia" || category == "Rescue Fauna - Tasmania" || category == "Rescue Fauna - Victoria" || category == "Rescue Fauna - Western Australia") {
        var name = category.substring(15);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Rescue Fauna" && array[i]["State - parsed"] == name) {
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

    if (category == "Spread Awareness - Australian Capital Territory" || category == "Spread Awareness - New South Wales" || category == "Spread Awareness - Northern Territory" || category == "Spread Awareness - Queensland" || category == "Spread Awareness - South Australia" || category == "Spread Awareness - Tasmania" || category == "Spread Awareness - Victoria" || category == "Spread Awareness - Western Australia") {
        var name = category.substring(19);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Spread Awareness" && array[i]["State - parsed"] == name) {
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

    if (category == "Attend Conservation Workshops - Australian Capital Territory" || category == "Attend Conservation Workshops - New South Wales" || category == "Attend Conservation Workshops - Northern Territory" || category == "Attend Conservation Workshops - Queensland" || category == "Attend Conservation Workshops - South Australia" || category == "Attend Conservation Workshops - Tasmania" || category == "Attend Conservation Workshops - Victoria" || category == "Attend Conservation Workshops - Western Australia") {
        var name = category.substring(31);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Attend Conservation Workshops" && array[i]["State - parsed"] == name) {
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

    if (category == "Donate - Australian Capital Territory" || category == "Donate - New South Wales" || category == "Donate - Northern Territory" || category == "Donate - Queensland" || category == "Donate - South Australia" || category == "Donate - Tasmania" || category == "Donate - Victoria" || category == "Donate - Western Australia") {
        var name = category.substring(9);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Donate" && array[i]["State - parsed"] == name) {
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

    if (category == "Citizen Science - Australian Capital Territory" || category == "Citizen Science - New South Wales" || category == "Citizen Science - Northern Territory" || category == "Citizen Science - Queensland" || category == "Citizen Science - South Australia" || category == "Citizen Science - Tasmania" || category == "Citizen Science - Victoria" || category == "Citizen Science - Western Australia") {
        var name = category.substring(18);
        for (var i = 0; i < array.length; i++) {
            if (array[i]["Type"] == "Citizen Science" && array[i]["State - parsed"] == name) {
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

function sortHL(array, flag, lowerLimit, upperLimit, row, category) {
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

    if (category == "Plant Trees" || category == "Rescue Fauna" || category == "Spread Awareness" || category == "Attend Conservation Workshops" || category == "Donate" || category == "Citizen Science") {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == category) {
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

    if (category == "Plant Trees - Australian Capital Territory" || category == "Plant Trees - New South Wales" || category == "Plant Trees - Northern Territory" || category == "Plant Trees - Queensland" || category == "Plant Trees - South Australia" || category == "Plant Trees - Tasmania" || category == "Plant Trees - Victoria" || category == "Plant Trees - Western Australia") {
        var name = category.substring(14);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Plant Trees" && array[i]["State - parsed"] == name) {
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

    if (category == "Rescue Fauna - Australian Capital Territory" || category == "Rescue Fauna - New South Wales" || category == "Rescue Fauna - Northern Territory" || category == "Rescue Fauna - Queensland" || category == "Rescue Fauna - South Australia" || category == "Rescue Fauna - Tasmania" || category == "Rescue Fauna - Victoria" || category == "Rescue Fauna - Western Australia") {
        var name = category.substring(15);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Rescue Fauna" && array[i]["State - parsed"] == name) {
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

    if (category == "Spread Awareness - Australian Capital Territory" || category == "Spread Awareness - New South Wales" || category == "Spread Awareness - Northern Territory" || category == "Spread Awareness - Queensland" || category == "Spread Awareness - South Australia" || category == "Spread Awareness - Tasmania" || category == "Spread Awareness - Victoria" || category == "Spread Awareness - Western Australia") {
        var name = category.substring(19);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Spread Awareness" && array[i]["State - parsed"] == name) {
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

    if (category == "Attend Conservation Workshops - Australian Capital Territory" || category == "Attend Conservation Workshops - New South Wales" || category == "Attend Conservation Workshops - Northern Territory" || category == "Attend Conservation Workshops - Queensland" || category == "Attend Conservation Workshops - South Australia" || category == "Attend Conservation Workshops - Tasmania" || category == "Attend Conservation Workshops - Victoria" || category == "Attend Conservation Workshops - Western Australia") {
        var name = category.substring(31);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Attend Conservation Workshops" && array[i]["State - parsed"] == name) {
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

    if (category == "Donate - Australian Capital Territory" || category == "Donate - New South Wales" || category == "Donate - Northern Territory" || category == "Donate - Queensland" || category == "Donate - South Australia" || category == "Donate - Tasmania" || category == "Donate - Victoria" || category == "Donate - Western Australia") {
        var name = category.substring(9);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Donate" && array[i]["State - parsed"] == name) {
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

    if (category == "Citizen Science - Australian Capital Territory" || category == "Citizen Science - New South Wales" || category == "Citizen Science - Northern Territory" || category == "Citizen Science - Queensland" || category == "Citizen Science - South Australia" || category == "Citizen Science - Tasmania" || category == "Citizen Science - Victoria" || category == "Citizen Science - Western Australia") {
        var name = category.substring(18);
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i]["Type"] == "Citizen Science" && array[i]["State - parsed"] == name) {
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

