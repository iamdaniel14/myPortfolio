const HAMBURGER_ICON=document.querySelector (".nav_container__menu_icon");
let hamburger_icon_is_clicked=false;

HAMBURGER_ICON.addEventListener ("click", () =>{
const NAV_LIST_CONTAINER=document.querySelector (".nav_container__list");
if (!hamburger_icon_is_clicked) {
    hamburger_icon_is_clicked=true;
    NAV_LIST_CONTAINER.classList.remove ("nav_container__list_remove");
    NAV_LIST_CONTAINER.classList.add ("nav_container__list_show");


}  else {
    hamburger_icon_is_clicked=false;
    NAV_LIST_CONTAINER.classList.add ("nav_container__list_remove");
    NAV_LIST_CONTAINER.classList.remove ("nav_container__list_show");

}

}

)

const exist_ICON=document.querySelector (".nav_container__exist");
let exist_icon_is_clicked=true;

exist_ICON.addEventListener ("click", () =>{
const NAV_LIST_CONTAINER=document.querySelector (".nav_container__list");
if (exist_icon_is_clicked) {
    hamburger_icon_is_clicked=false;
     NAV_LIST_CONTAINER.classList.add ("nav_container__list_remove");
     NAV_LIST_CONTAINER.classList.remove ("nav_container__list_show");


}

})









