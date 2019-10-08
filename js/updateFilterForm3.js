function updateFilterForm(category) {
/*
@author: Ishika Wikramanayake
@start_date: 13-09-2019
@end_date: 13-09-2019
@description: Update the filter form when loading the page
*/
    if (category == "Plant Trees") {
        document.getElementById("activity-selected").selectedIndex = "1";
    }
    if (category == "Rescue Fauna") {
        document.getElementById("activity-selected").selectedIndex = "2";
    }
    if (category == "Spread Awareness") {
        document.getElementById("activity-selected").selectedIndex = "3";
    }
    if (category == "Attend Conservation Workshops") {
        document.getElementById("activity-selected").selectedIndex = "4";
    }
    if (category == "Donate") {
        document.getElementById("activity-selected").selectedIndex = "5";
    }
    if (category == "Citizen Science") {
        document.getElementById("activity-selected").selectedIndex = "6";
    }
}