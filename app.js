let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px"

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px"
        menuList.style.padding = "1px"

    }else{
        menuList.style.maxHeight = "0px"
    }
}
