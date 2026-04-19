
//========================================================
/*let btnmore = document.getElementById("post-more");

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

}); */

//================================================
let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click",function(e){
  let mymenu3 = document.createElement("section");
  mymenu3.className = "menu_for_all";
  let options3 = [
    "Dismiss for a day",
    "Dismiss for a week",
    "Not interested"
  ];
  
  for(let i=0;i<options3.length;i++){
    let item3 = document.createElement("div");
    item3.textContent = options3[i];  
    item3.className = "menu_for_all_item";
    mymenu3.appendChild(item3);
  }

  closeBtn.appendChild(mymenu3);

});

//================================================
let footermoreBtn = document.querySelector("#footer-more");

footermoreBtn.addEventListener("click",function(e){
  let mymenu4 = document.createElement("section");
  mymenu4.className = "menu_for_all";
  let options4 = [
    "About",
    "Download the X App",
    "X for Business",
    "Developers"
  ];
  
  for(let i=0;i<options4.length;i++){
    let item4 = document.createElement("div");
    item4.textContent = options4[i];  
    item4.className = "menu_for_all_item";
    mymenu4.appendChild(item4);
  }

  footermoreBtn.appendChild(mymenu4);

});


document.addEventListener("click", function(e) {
  let menu = document.querySelector(".menu_for_all");

  if (!menu) return;
//!btnmore.contains(e.target) &&
  if (
    !menu.contains(e.target) &&
    !closeBtn.contains(e.target) &&
    !footermoreBtn.contains(e.target)
  ) {
    menu.remove();
  }
});

//======================== SEARCH  ========================
let searchBar = document.querySelector(".search");
let seacrhing = document.querySelector(".search input");


seacrhing.addEventListener("click",function(e){
  searchBar.classList.add("search-focus");

  let seachContent = document.createElement("section");
  let searchBox = document.createElement("p");
  
  seachContent.className = "seach-box";
  
  searchBox.textContent = "Try searching for people, lists, or keywords";  
  searchBox.className = "search-box-content";
  seachContent.appendChild(searchBox);

  searchBar.appendChild(seachContent);
  
});


//================================Two options==================================
let tabs = document.querySelectorAll(".tab-optian");

window.addEventListener("DOMContentLoaded", () => {
  let savedTab = sessionStorage.getItem("activeTab");
  if (savedTab !== null) {
    let current = document.querySelector(".two-optians-active");
    if (current) current.classList.remove("two-optians-active");
    tabs[savedTab].classList.add("two-optians-active");
  }
});

/*tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".two-optians-active").classList.remove("two-optians-active");
    tab.classList.add("two-optians-active");
  });
});*/

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    let current = document.querySelector(".two-optians-active");
    if (current) {
      current.classList.remove("two-optians-active");
    }
    tab.classList.add("two-optians-active");
    sessionStorage.setItem("activeTab", index);
  });
});