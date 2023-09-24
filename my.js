const url = "https://script.google.com/macros/s/AKfycbzc1KbpbjZWXHdyrIhOSDYRmXZ2cA6xVbsrJDW4zxjgcnt2DuXMc660zBTytkBC8K1B/exec"
function getJsonData(){
    fetch(url).then(d=>d.json()).then(d=>{
        document.getElementById("app").textContent= d[0].status
    })
}

function sendJsonData(){
    fetch(url,{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        /*
        credentials: "omit", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        */
        redirect: "follow", // manual, *follow, error
        body: JSON.stringify({name: "Ranganadha"}), // body data type must match "Content-Type" header
      })
    }

document.getElementById("btn").addEventListener("click", getJsonData)
document.getElementById("btn1").addEventListener("click", sendJsonData)
