function updateFilterForm(category) {
/*
@author: Ishika Wikramanayake
@start_date: 13-09-2019
@end_date: 13-09-2019
@description: Update the filter form when loading the page
*/
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
        document.getElementById("states-selected").selectedIndex = "1";
    }
    if (category == "Donate") {
        document.getElementById("states-selected").selectedIndex = "2";
    }
    if (category == "Citizen Science") {
        document.getElementById("states-selected").selectedIndex = "3";
    }

}