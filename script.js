taskbar=document.getElementById("log")
startmenu=document.getElementsByClassName("startmenu")[0]
bodymenu=document.getElementsByTagName("body")
taskbar.addEventListener("click", () =>{
    console.log("Clicked")
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom = "-650px";
        console.log("IF");
    }
    else{
        console.log("else");
        startmenu.style.bottom="60px"
    }
})




chrome=document.getElementById("chrome")
chrome.addEventListener("click",()=>{
    console.log("Chrome");
    location.href="https://www.google.com/"
})

recy=document.getElementById("recy")
recyclebin=document.getElementsByClassName("recyclebin")[0]
bin=document.getElementById("recyl")
recy.addEventListener("click",()=>{
    console.log("theekhai");
    if(recyclebin.style.bottom == "100px")
    {
        recyclebin.style.bottom = "-650px";
        console.log("IF");
     


    }
    else{
        console.log("else");
       recyclebin.style.bottom="100px"
       bin.style.visibility="visible"
     

    }
})
bin.addEventListener("click",()=>{
    bin.style.visibility="hidden"
    if(recyclebin.style.bottom == "100px")
    {
        recyclebin.style.bottom = "-650px";
        console.log("IF");
     


    }
    else{
        console.log("else");
       recyclebin.style.bottom="100px"
       bin.style.visibility="visible"
     

    }

})



 pcfile= document.getElementById("thispc")
 pcpic= document.getElementsByClassName("thisp")[0]

    pcfile.addEventListener("click",()=>{
        
    if(pcpic.style.bottom == "100px")
    {
        pcpic.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
       pcpic.style.bottom="100px"
       
     

    }

})
pcpic.addEventListener("click",()=>{
    pcpic.style.bottom="-700px"
})


vscode=document.getElementById("vscode")
vs=document.getElementsByClassName("vscode")[0]
vscode.addEventListener("click",()=>{
        
    if(vs.style.bottom == "100px")
    {
        vs.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
      vs.style.bottom="100px"
       
     

    }

})
vs.addEventListener("click",()=>{
    vs.style.bottom="-700px"
})

vlc=document.getElementById("vlc")
vl=document.getElementsByClassName("vlc")[0]
vlc.addEventListener("click",()=>{
        
    if(vlc.style.bottom == "100px")
    {
        vl.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
      vl.style.bottom="100px"
       
     

    }

})
vl.addEventListener("click",()=>{
    vl.style.bottom="-700px"
})

logo2=document.getElementById("logo2")
logo3=document.getElementById("logo3")
logo5=document.getElementById("logo5")
logo6=document.getElementById("logo6")

edge=document.getElementsByClassName("edge")[0]
store=document.getElementsByClassName("store")[0]
logo2.addEventListener("click",()=>{
    if(edge.style.bottom =="100px")
    {
        edge.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
     edge.style.bottom="100px"
       
     

    }

})
logo3.addEventListener("click",()=>{
    if(vs.style.bottom == "98px")
    {
        vs.style.bottom = "-710px";
        console.log("IF");
     


    }
    else{
        console.log("else");
      vs.style.bottom="98px"
       
     

    }
})
logo5.addEventListener("click",()=>{
    if(store.style.bottom =="100px")
    {
        store.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
     store.style.bottom="100px"
       
     

    }

})

words = document.getElementsByClassName("words")[0]
logo6.addEventListener("click",()=>{
    if(words.style.bottom =="100px")
    {
        words.style.bottom = "-700px";
        console.log("IF");
     


    }
    else{
        console.log("else");
     words.style.bottom="100px"
       
     

    }

})