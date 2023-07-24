const tools = {
    "CONVERSIONS": {
        "TEMPERATURE": "temperature.html",
        "LENGTH": "distance.html",
    },
}

function populateToolList() {
    let content = "";

    for (category in tools) {
        content = content.concat("<h3>", category, "</h3>\n")
        content = content.concat("<ul>\n")

        console.log(tools[category])
        for (tool in tools[category]) {
            content = content.concat('<li><a href="tools/conversions/', tools[category][tool], '">', tool, '</a></li>\n')
        }

        content = content.concat("</ul>")
        content.concat("\n")
    }

    console.log(content);

    document.getElementById("tools").innerHTML = content
}