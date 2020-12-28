const baseUrl = "https://raw.githubusercontent.com/ordermsg/legal/master/";
divs = document.getElementsByClassName("legal-doc");

for(var i = 0; i < divs.length; i++) {
    const div = divs[i];

    const doc = div.getAttribute("x-md-source");
    const src = baseUrl + doc;
    div.innerHTML = `<h1>Loading ${doc}...<h1>`;

    const client = new XMLHttpRequest();
    client.open("GET", src);
    client.onloadend = function() {
        const text = client.responseText;
        const html = marked(text);
        div.innerHTML = html;
    }
    client.send();
}