const url = "https://script.google.com/macros/s/AKfycbzc1KbpbjZWXHdyrIhOSDYRmXZ2cA6xVbsrJDW4zxjgcnt2DuXMc660zBTytkBC8K1B/exec"

function getJsonData(){
    fetch(url).then(d=>d.json()).then(d=>{
        document.getElementById("app").textContent= d[0].status
    })
}

document.getElementById("btn").addEventListener("click", getJsonData)