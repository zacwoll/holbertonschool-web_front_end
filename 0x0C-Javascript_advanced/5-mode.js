function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    let spookyMode = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    document.body.innerHTML += "<p>Welcome Holberton!</p>"

    let btn_spooky = document.createElement('button');
    btn_spooky.textContent = "Spooky";
    btn_spooky.onclick = spookyMode;
    document.body.appendChild(btn_spooky);
    
    let btn_dark = document.createElement('button');
    btn_dark.textContent = "dark";
    btn_dark.onclick = darkMode;
    document.body.appendChild(btn_dark);

    let btn_scream = document.createElement('button');
    btn_scream.textContent = "Scream";
    btn_scream.onclick = screamMode;
    document.body.appendChild(btn_scream);
}