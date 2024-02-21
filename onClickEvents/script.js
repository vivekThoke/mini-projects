// document.querySelector("#main").addEventListener("click", function(e) {
//     console.log("ul clicked first")
// }, true)


// document.querySelector("#purple").addEventListener("click", function(e) {
//     console.log("Inner elements clicked first")
//     e.stopPropagation()
// }, true)

// document.querySelector("#camera").addEventListener("click", function(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     console.log("clicked on the document")
// })

document.querySelector("#main").addEventListener("click", function(e) {
    // console.log(e.target.parentNode)
    // // let targetd = e.target.parentNode
    // // targetd.remove();
    // targetd.parentNode.removeChild(targetd)
    console.log(e.target.parentNode)
})