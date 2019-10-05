function updatepagination(value){

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

    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item active") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item disabled");
    }

    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item");
    }

    updateData();
}

function nextPage() {
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

    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item active") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item disabled");
    }

    if (pages.childNodes[pages.childElementCount - 2].getAttribute("class") == "page-item") {
        pages.childNodes[pages.childElementCount - 1].setAttribute("class", "page-item");
    }

    updateData();
}