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
let navbar=document.querySelector("#navbr");
document.querySelector("#navbar").setAttribute("class","black");
bgModeBtn.addEventListener("click",()=>{
    document.querySelector("body").style.color=mode;
    document.querySelector("#navbar").setAttribute("class",mode);
    console.log("cliked");
if(mode==="white")
{
    for(let i=0;i<4;i++)
    {
        document.querySelector(".navbarBtn1").setAttribute("class","navbarBtn2");
    }
    mode="black";
}
else
{
    for(let i=0;i<4;i++)
    {
        document.querySelector(".navbarBtn2").setAttribute("class","navbarBtn1");
    }
    mode="white";
}
document.querySelector("body").setAttribute("class",mode);
document.querySelector("h2").setAttribute("class",mode);
});

let header=document.querySelector("header");
let marquee=document.querySelector("marquee");
let header2=document.createElement("h2");
header.onmouseenter=()=>{
    header2.innerText="શ્રી બેલમપર પ્રાથમિક શાળા";
    header2.style.backgroundColor=mode;
    marquee.before(header2);
    marquee.remove();
   
};
header.onmouseleave=()=>{
   console.log("leaved");
   header2.before(marquee);
   header2.remove();
   
};
