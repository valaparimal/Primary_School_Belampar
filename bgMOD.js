console.log("hello");
let bgModeBtn=document.createElement("button");
bgModeBtn.innerText="Click to change mode of background";
bgModeBtn.style.backgroundColor="lightred";
bgModeBtn.style.position="fixed";
bgModeBtn.style.right="0%";
bgModeBtn.style.bottom="0%";
bgModeBtn.style.width="300px";
bgModeBtn.style.height="30px";
document.querySelector("body").append(bgModeBtn);

let mode="white";
bgModeBtn.addEventListener("click",()=>{
    document.querySelector("body").style.color=mode;
    console.log("cliked");
    if(mode==="white")
    {
        mode="black";
    }
    else
    {
        mode="white";
    }
    document.querySelector("body").setAttribute("class",mode);
});