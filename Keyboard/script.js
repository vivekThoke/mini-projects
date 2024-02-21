const key = document.querySelector(".key")
const insert = document.querySelector("#insert")


window.addEventListener("keydown", function(e) {
    console.log(e.target.id)
    insert.innerHTML = `
    <div class = "color">
    <table>
    <tr>
      <th>key</th>
      <th>keydown</th>
      <th>number</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table> 
  </div>
    `
})