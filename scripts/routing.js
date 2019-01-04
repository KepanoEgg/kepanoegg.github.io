
    $(document).ready(function () {
        var str = window.location + '';
        var query = str.split('?')[1];
        var queries;
        var pairs = {};
        if (query != null) {
            queries = query.split('&');
            queries.forEach(function (element) {
                pairs[element.split('=')[0]] = element.split('=')[1];
            });
        }
        var location = pairs["place"];
        if (location == "here") {
            document.getElementById("body").innerText = "Here";
        }
        else if (location == "there") {
            document.getElementById("body").innerText = "There";
        }
        else {
            document.getElementById("body").innerText = "Home";
        }
    })();