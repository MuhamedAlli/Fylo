var header = document.getElementById("pageheader");

window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
        console.log(this.window.screenY)
        header.style.backgroundColor ="#0c1524";
        header.style.padding = "1rem";
    }else{
        header.style.backgroundColor ="transparent";
        header.style.zIndex="99999";
        header.style.padding = "2rem";
    }
});