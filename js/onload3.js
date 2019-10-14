function myFunction() {
/*
@author: Ishika Wikramanayake
@start_date: 27-08-2019
@end_date: 13-09-2019
@description: Displays the endangered species images as needed
*/
    // get the category sent from previous page
    var category = decodeURIComponent(window.location.search);
    category = category.substring(10);


    // update the heading with the category
    document.getElementById("heading").innerHTML = category;
    if (category == "Australia") {
        document.getElementById("species-selected").selectedIndex = "0";
    }
    if (category == "Plant Trees") {
        document.getElementById("species-selected").selectedIndex = "1";
    }
    if (category == "Rescue Fauna") {
        document.getElementById("species-selected").selectedIndex = "2";
    }
    if (category == "Spread Awareness") {
        document.getElementById("species-selected").selectedIndex = "3";
    }
    if (category == "Attend Conservation Workshops") {
        document.getElementById("species-selected").selectedIndex = "4";
    }
    if (category == "Donate") {
        document.getElementById("species-selected").selectedIndex = "5";
    }
    if (category == "Citizen Science") {
        document.getElementById("species-selected").selectedIndex = "6";
    }

    var row = document.getElementById("species");
    var unique = {};

    pageNavigation(category);
    
    // check which section was selected in the previous page

    var newlist = [];
    for (i = 0; i < data.length; i++) {
      newlist[i] = data[i];
    }

    // sort the array of dictionaries in ascending order of the rank
    newlist.sort((a, b) => (a["Organisation"] > b["Organisation"]) ? 1 : -1);
   
    
    if (category == "Australia") {
        for (var i = 0; i < newlist.length; i++) {
            unique = populateSpecies(i, row, unique, newlist[i]);
            if (Object.keys(unique).length == 10) {
                break;
            }
        }
    }
    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < newlist.length; i++) {
            if (newlist[i]["State - parsed"] == category) {
                unique = populateSpecies(i, row, unique, newlist[i]);
            }
            if (Object.keys(unique).length == 10) {
                break;
            }
        }
    }
    else {
        if (category == "Plant Trees" || category == "Rescue Fauna" || category == "Spread Awareness" || category == "Attend Conservation Workshops" || category == "Donate" || category == "Citizen Science") {
            for (var i = 0; i < newlist.length; i++) {
                if (newlist[i]["Type"] == category) {
                    unique = populateSpecies(i, row, unique, newlist[i]);
                }
                if (Object.keys(unique).length == 10) {
                    break;
                }
            }
        }
    }
    
}