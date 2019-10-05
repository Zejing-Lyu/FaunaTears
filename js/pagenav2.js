function pageNavigation(category){

    var pages = document.getElementById("pages");
    while (pages.firstChild) {
        pages.removeChild(pages.firstChild);
    }
    if (category == "Australian Capital Territory" || category == "Northern Territory" || category == "Tasmania") {
        pages.setAttribute("class", "pagination-hidden");

    }
    else {
        pages.setAttribute("class", "pagination");
        
        var loop = 0;
        if (category == "Australia") {
            loop = 12
        }

        if (category == "New South Wales" || category == "South Australia" || category == "Victoria") {
            loop = 2
        }
        if (category == "Queensland" || category == "Western Australia") {
            loop = 3
        }

        var newli = document.createElement("li");
        var newa = document.createElement("a");
        var newspan1 = document.createElement("span");
        var newspan2 = document.createElement("span");

        newli.setAttribute("class", "page-item disabled");
        newa.setAttribute("class", "page-link");
        newa.setAttribute("aria-label", "Previous");
        newa.onclick = function() {
            previousPage();
        };
        newspan1.setAttribute("aria-label", "true");
        newspan1.innerHTML = "&laquo;";
        newspan2.setAttribute("class", "sr-only");
        newspan2.innerHTML = "Previous";

        newa.appendChild(newspan1);
        newa.appendChild(newspan2);
        newli.appendChild(newa);
        pages.appendChild(newli);
        for (var i = 0; i < loop; i++) {
            var newli = document.createElement("li");
            var newa = document.createElement("a");
            if (i == 0) {
                newli.setAttribute("class", "page-item active");
            }
            else {
                newli.setAttribute("class", "page-item");
            }
            newli.style.cursor = "pointer";
            newa.setAttribute("class", "page-link");
            newa.innerHTML = i+1;
            newa.onclick = function() {
                var value = this.innerHTML;
                updatepagination(value);
            };
            newli.appendChild(newa);
            pages.appendChild(newli);
        }

        var newli = document.createElement("li");
        var newa = document.createElement("a");
        var newspan1 = document.createElement("span");
        var newspan2 = document.createElement("span");

        newli.setAttribute("class", "page-item");
        newa.setAttribute("class", "page-link");
        newa.setAttribute("aria-label", "Next");
        newa.onclick = function() {
            nextPage();
        };
        newspan1.setAttribute("aria-label", "true");
        newspan1.innerHTML = "&raquo;";
        newspan2.setAttribute("class", "sr-only");
        newspan2.innerHTML = "Next";

        newa.appendChild(newspan1);
        newa.appendChild(newspan2);
        newli.appendChild(newa);
        pages.appendChild(newli);
    }
}