console.log("Main-side code running");

window.onload = function () {

    document.getElementById("btr1").innerHTML = "data.name";
    document.getElementById("btr1").onclick = function () {
        jumpPage1();
    };

    document.getElementById("btr2").onclick = function () {
    setBtr2();
    };

    document.getElementById("btr3").onclick = function () {
      setBtr3();
      };



}

function setBtr3(){
  window.location.href = "./page1.html";
}




function setBtr2(){
  if(document.getElementById("banner").style.animationPlayState == "running"){
    document.getElementById("banner").style.animationPlayState = "paused";
    document.getElementById("btr2").innerHTML = "play";
  }else{
    document.getElementById("banner").style.animationPlayState = "running";
    document.getElementById("btr2").innerHTML = "pause";
  }

}




async function jumpPage1() {
    console.log("this is jumping");
  
    fetch("/.netlify/functions/api/abc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"hello":"hi!"}),
    }).then(async (response) => {
        console.log(response.status);
      if (response.status === 200) {
        const data = JSON.parse(await response.json());
        console.log("this is front end login status 200");
        alert(data);
        window.location.href ="./ft/p1.html";
      } else alert("username or password incorrect");
    });
  }