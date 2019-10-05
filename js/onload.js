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

    updateFilterForm(category);

    var row = document.getElementById("species");
    var unique = {};

    pageNavigation(category);
    
    // check which section was selected in the previous page
    
    if (category == "Australia") {
        for (var i = 0; i < data.length; i++) {
            unique = populateSpecies(i, row, unique, data[i]);
            if (Object.keys(unique).length == 12) {
                break;
            }
        }
    }
    if (category == "Australian Capital Territory" || category == "New South Wales" || category == "Northern Territory" || category == "Queensland" || category == "South Australia" || category == "Tasmania" || category == "Victoria" || category == "Western Australia") {
        for (var i = 0; i < data.length; i++) {
            if (data[i]["State - parsed"] == category) {
                unique = populateSpecies(i, row, unique, data[i]);
            }
            if (Object.keys(unique).length == 12) {
                break;
            }
        }
    }
    else {
        if (category == "Amphibia" || category == "Mammalia" || category == "Reptilia") {
            for (var i = 0; i < data.length; i++) {
                if (data[i]["Class"] == category) {
                    unique = populateSpecies(i, row, unique, data[i]);
                }
                if (Object.keys(unique).length == 12) {
                    break;
                }
            }
        }
    }
    
}