function updatepagination(value){
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Update page navigation when selecting a page number
*/
    var pages = document.getElementById("pages");

    if (value == 1) {
        pages.childNodes[0].setAttribute("class", "page-item disabled");
    }
    else {
        pages.childNodes[0].setAttribute("class", "page-item");
    }

    if (value == pages.childElementCount - 2) {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item disabled");
    }
    else {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item");
    }

    for (var i = 1; i < pages.childElementCount - 1; i++) {
        if (i == value) {
            pages.childNodes[i].setAttribute("class", "page-item active");
        }
        else {
            pages.childNodes[i].setAttribute("class", "page-item");
        }
    }
    updateData();
}

function previousPage() {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Update page navigation when selecting previous button
*/
    var pages = document.getElementById("pages");
    for (var i = 1; i < pages.childElementCount - 1; i++) {
        if (pages.childNodes[i].getAttribute("class") == "page-item active") {
            pages.childNodes[i].setAttribute("class", "page-item");
            pages.childNodes[i-1].setAttribute("class", "page-item active");
            break;
        }
    }

    if (pages.childNodes[1].getAttribute("class") == "page-item active") {
        pages.childNodes[0].setAttribute("class", "page-item disabled");
    }

    if (pages.childNodes[1].getAttribute("class") == "page-item") {
        pages.childNodes[0].setAttribute("class", "page-item");
    }

    // If the selected page is the first page, previous button should be disabled and next button should be active
    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item active") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item disabled");
    }

    // If the selected page is the last page, previous button should be active and next button should be disabled
    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item");
    }

    updateData();
}

function nextPage() {
/*
@author: Ishika Wikramanayake
@start_date: 27-09-2019
@end_date: 5-10-2019
@description: Update page navigation when selecting next button
*/
    var pages = document.getElementById("pages");
    var flag = 0;
    for (var i = 1; i < pages.childElementCount - 1; i++) {
        if (flag == 1) {
            pages.childNodes[i].setAttribute("class", "page-item active");
            break;
        }
        if (pages.childNodes[i].getAttribute("class") == "page-item active") {
            flag = 1;
            pages.childNodes[i].setAttribute("class", "page-item");
        }
    }

    if (pages.childNodes[1].getAttribute("class") == "page-item active") {
        pages.childNodes[0].setAttribute("class", "page-item disabled");
    }

    if (pages.childNodes[1].getAttribute("class") == "page-item") {
        pages.childNodes[0].setAttribute("class", "page-item");
    }

    // If the selected page is the first page, previous button should be disabled and next button should be active
    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item active") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item disabled");
    }

    // If the selected page is the last page, previous button should be active and next button should be disabled
    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item");
    }

    updateData();
}