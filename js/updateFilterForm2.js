function updateFilterForm(category) {
/*
@author: Ishika Wikramanayake
@start_date: 13-09-2019
@end_date: 13-09-2019
@description: Update the filter form when loading the page
*/
    if (category == "Australian Capital Territory") {
        document.getElementById("states-selected").selectedIndex = "1";
    }
    if (category == "New South Wales") {
        document.getElementById("states-selected").selectedIndex = "2";
    }
    if (category == "Northern Territory") {
        document.getElementById("states-selected").selectedIndex = "3";
    }
    if (category == "Queensland") {
        document.getElementById("states-selected").selectedIndex = "4";
    }
    if (category == "South Australia") {
        document.getElementById("states-selected").selectedIndex = "5";
    }
    if (category == "Tasmania") {
        document.getElementById("states-selected").selectedIndex = "6";
    }
    if (category == "Victoria") {
        document.getElementById("states-selected").selectedIndex = "7";
    }
    if (category == "Western Australia") {
        document.getElementById("states-selected").selectedIndex = "8";
    }
}