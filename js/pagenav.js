function pageNavigation(category){

    var pages = document.getElementById("pages");
    while (pages.firstChild) {
        pages.removeChild(pages.firstChild);
    }
    if (category == "Australian Capital Territory" || category == "Tasmania" || category == "Amphibia - Australian Capital Territory" || category == "Amphibia - New South Wales" || category == "Amphibia - Northern Territory" || category == "Amphibia - Queensland" || category == "Amphibia - South Australia" || category == "Amphibia - Tasmania" || category == "Amphibia - Victoria" || category == "Amphibia - Western Australia" || category == "Mammalia - Australian Capital Territory" || category == "Mammalia - New South Wales" || category == "Mammalia - Northern Territory" || category == "Mammalia - Queensland" || category == "Mammalia - South Australia" || category == "Mammalia - Tasmania" || category == "Mammalia - Victoria" || category == "Mammalia - Western Australia"  || category == "Reptilia - Australian Capital Territory" || category == "Reptilia - New South Wales" || category == "Reptilia - Tasmania") {
        pages.setAttribute("class", "pagination-hidden");

    }
    else {
        pages.setAttribute("class", "pagination");
        
        var loop = 0;
        if (category == "Australia") {
            loop = 11
        }

        if (category == "New South Wales" || category == "Northern Territory" || category == "Amphibia" || category == "Reptilia - Northern Territory" || category == "Reptilia - South Australia" || category == "Reptilia - Victoria" || category == "Reptilia - Western Australia") {
            loop = 2
        }
        if (category == "South Australia" || category == "Victoria" || category == "Western Australia" || category == "Mammalia" || category == "Reptilia - Queensland") {
            loop = 3
        }
        if (category == "Queensland") {
            loop = 4
        }
        if (category == "Reptilia") {
            loop = 7
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