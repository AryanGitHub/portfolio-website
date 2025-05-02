const main_menu_button = document.querySelector(".main-menu-button");
const main_menu = document.getElementById("main-menu-id");

let main_menu_style_top = "40vw"

window.onscroll = function () {
    const header = document.getElementById("header");
    const first_name = document.getElementById("first-name");
    const last_name = document.getElementById("last-name");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink-info-bar");
        first_name.classList.add("shrink-title-name");
        last_name.classList.add("shrink-title-name");
        last_name.classList.add("shrink-last-name");

        main_menu_style_top = "20vw"

    } else {
        header.classList.remove("shrink-info-bar");
        first_name.classList.remove("shrink-title-name");
        last_name.classList.remove("shrink-title-name");
        last_name.classList.remove("shrink-last-name");

        main_menu_style_top = "40vw"
    }
    
    if (window.matchMedia("(max-width: 1000px)").matches){
        main_menu.style.top = main_menu_style_top;
    }
    
};


main_menu_button.onclick = function () {
    main_menu.classList.toggle("main-menu");
    main_menu.classList.toggle("main-menu-mobile");
    main_menu.style.top = main_menu_style_top

    let main_menu_items = document.querySelectorAll(".main-menu-item")
    main_menu_items.forEach((item)=> item.classList.toggle("main-menu-item-mobile"));
    main_menu_items.forEach((item)=> item.classList.toggle("main-menu-item"));
}

