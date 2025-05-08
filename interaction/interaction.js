const HAMBURGER_ICON=document.querySelector (".nav_container__menu-icon");
let hamburger_icon_is_clicked=false;

HAMBURGER_ICON.addEventListener ("click", () =>{
const NAV_LIST_CONTAINER=document.querySelector (".nav_container__list");



if (!hamburger_icon_is_clicked) {
    hamburger_icon_is_clicked=true;
    NAV_LIST_CONTAINER.classList.remove ("nav_container__list-remove");
    NAV_LIST_CONTAINER.classList.add ("nav_container__list-show");
    console.log ("clicked")

} else if (hamburger_icon_is_clicked){
    hamburger_icon_is_clicked=false;
    NAV_LIST_CONTAINER.classList.remove ("nav_container__list-show");
    NAV_LIST_CONTAINER.classList.add ("nav_container__list-remove");
}

})