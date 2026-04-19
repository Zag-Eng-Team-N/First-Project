//========================================================
let myBtnLove=document.querySelector(".btn-love");
let  intraciLove=document.getElementById("loveicon");
let myspani=document.getElementById("spanlove");
  
 let like=false;
    
 myBtnLove.addEventListener("click",function(e){
    if(!like){
     
    myspani.innerHTML++;
  intraciLove.classList.remove("fa-regular");
   intraciLove.classList.add("fa-solid");
    intraciLove.style.color = "red";
    like=true;
    }
    else{
      
     myspani.innerHTML--;
   intraciLove.classList.remove("fa-solid");
   intraciLove.classList.add("fa-regular");
    intraciLove.style.color = "";
      like= false; 
    }
 });

//========================================================
let myspanview=document.getElementById("spanview");
 document.addEventListener("DOMContentLoaded",function(e){
  let views=localStorage.getItem("views");
  if(views==null){
    views=0;
  }
  views++;
  localStorage.setItem("views",views);
  myspanview.innerHTML=views;
 });


//========================================================
let myBtnsave = document.getElementById("icon6");
let mysavei=document.getElementById("saveicon");
  
 let save=false;
    
myBtnsave.addEventListener("click",function(e){
    if(!save){
     
  
  mysavei.classList.remove("fa-regular");
   mysavei.classList.add("fa-solid");
    mysavei.style.color = "blue";
    save=true;
    }
    else{
      
 
   mysavei.classList.remove("fa-solid");
   mysavei.classList.add("fa-regular");
    mysavei.style.color = "";
    save= false; 
    }
 });

 //========================================================
 let btnshare=document.getElementById("icon7");
  btnshare.addEventListener("click",function(e){
  let mymenu=document.createElement("div");
  mymenu.className="men";
   let options = [
    "Copy link",
    "Share post",
    "send via",
  
  ];
    for(let i=0;i<options.length;i++){
   let item=document.createElement("div");
    item.textContent = options[i];  
     item.className = "share-item";
   mymenu.appendChild(item);
    }
     btnshare.appendChild(mymenu);
  });
  btnshare.addEventListener("click",()=>{
    mymenu.classList.toggle();
  });

//================================================================
let btnmore = document.getElementById("post-more");

btnmore.addEventListener("click",function(e){
  let mymenu2 = document.createElement("section");
  mymenu2.className = "menu_for_all";
  let options2 = [
    "not interested in this post",
    "unfollow",
    "Add/remove from lists",
    "mute",
    "Block",
    "view post activity",
    "Embed post",
    "report post",
    "Request Community Note"
  ];
  
  for(let i=0;i<options2.length;i++){
    let item2=document.createElement("div");
    item2.textContent = options2[i];  
    item2.className = "menu_for_all_item";
    mymenu2.appendChild(item2);
  }

  btnmore.appendChild(mymenu2);

}); 