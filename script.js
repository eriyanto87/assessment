var menu = [
    "Solutions By Industry", 
    "Solutions By Process", 
    "Software Solutions", 
    "Services"
]

//menu pop up
function desktopMenuPopUp() { 
    var desktopMenuContent = document.getElementById('desktop-menu');
    
    var solutionsMenu = document.createElement("ul");
    

    for (let i=0; i<menu.length; i++) {
        var solutionsMenuList = document.createElement("p"); 
        solutionsMenuList.innerHTML = menu[i]; 
        solutionsMenu.appendChild(solutionsMenuList);
    }
    desktopMenuContent.appendChild(solutionsMenu);
}