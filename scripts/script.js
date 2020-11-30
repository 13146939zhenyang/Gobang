var block = document.createElement("div")
var newClass = block.classList.add("newNode")
var i = 0;

function generateGrid(e) {
    console.log(e)
    var newNode = e.target
    if (newNode.classList.contains("whitepiece") || newNode.classList.contains("blackpiece")) { return } else {
        newNode.classList.add((i % 2 === 0) ? "whitepiece" : "blackpiece")
        i++
    }
    const nodeList = document.querySelectorAll(".newNode")
    const nodeArray = Array.apply(null, nodeList)
    for (var number = 0; number < 64; number++) {
        if (nodeArray[number].classList.contains("whitepiece") && nodeArray[number + 1].classList.contains("whitepiece") && nodeArray[number + 2].classList.contains("whitepiece") && nodeArray[number + 3].classList.contains("whitepiece") && nodeArray[number + 4].classList.contains("whitepiece")) {
            console.log(number)
            window.confirm("White Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("whitepiece") && nodeArray[number + 8].classList.contains("whitepiece") && nodeArray[number + 16].classList.contains("whitepiece") && nodeArray[number + 24].classList.contains("whitepiece") && nodeArray[number + 32].classList.contains("whitepiece")) {
            console.log(number)
            window.confirm("White Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("whitepiece") && nodeArray[number + 9].classList.contains("whitepiece") && nodeArray[number + 18].classList.contains("whitepiece") && nodeArray[number + 27].classList.contains("whitepiece") && nodeArray[number + 36].classList.contains("whitepiece")) {
            console.log(number)
            window.confirm("White Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("whitepiece") && nodeArray[number + 7].classList.contains("whitepiece") && nodeArray[number + 14].classList.contains("whitepiece") && nodeArray[number + 21].classList.contains("whitepiece") && nodeArray[number + 28].classList.contains("whitepiece")) {
            console.log(number)
            window.confirm("White Win");
            location.reload();
        }
    }
    for (var number = 0; number < 64; number++) {
        if (nodeArray[number].classList.contains("blackpiece") && nodeArray[number + 1].classList.contains("blackpiece") && nodeArray[number + 2].classList.contains("blackpiece") && nodeArray[number + 3].classList.contains("blackpiece") && nodeArray[number + 4].classList.contains("blackpiece")) {
            console.log(number)
            window.confirm("Black Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("blackpiece") && nodeArray[number + 8].classList.contains("blackpiece") && nodeArray[number + 16].classList.contains("blackpiece") && nodeArray[number + 24].classList.contains("blackpiece") && nodeArray[number + 32].classList.contains("blackpiece")) {
            console.log(number)
            window.confirm("Black Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("blackpiece") && nodeArray[number + 9].classList.contains("blackpiece") && nodeArray[number + 18].classList.contains("blackpiece") && nodeArray[number + 27].classList.contains("blackpiece") && nodeArray[number + 36].classList.contains("blackpiece")) {
            console.log(number)
            window.confirm("Black Win");
            location.reload();
        } else if (nodeArray[number].classList.contains("blackpiece") && nodeArray[number + 7].classList.contains("blackpiece") && nodeArray[number + 14].classList.contains("blackpiece") && nodeArray[number + 21].classList.contains("blackpiece") && nodeArray[number + 28].classList.contains("blackpiece")) {
            console.log(number)
            window.confirm("Black Win");
            location.reload();
        }
    }

}

for (var i = 0; i < 64; i++) {
    var node = block.cloneNode()
    document.querySelector(".grid").appendChild(node)
    node.addEventListener('click', generateGrid)
}