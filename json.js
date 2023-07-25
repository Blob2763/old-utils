funstion testJSON() {
    fetch('tools.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
}
