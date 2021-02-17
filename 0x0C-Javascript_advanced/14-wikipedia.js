function createElement(data) {
    var p = document.createElement("P");
    p.textContent = data.currentTarget.response;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let req = new XMLHTTPRequest();

    req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    req.onload = callback;
    req.send();
}

queryWikipedia(createElement);