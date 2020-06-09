var mobileNavItems = document.getElementById("mobileNavItems")
var darknessDiv = document.getElementById("darkness")

function showNavbar() {

    mobileNavItems.classList.toggle("navItemsHide")
    darknessDiv.classList.toggle("makeDark")
}

function closeNavbar() {
    mobileNavItems.classList.toggle("navItemsHide")
    darknessDiv.classList.toggle("makeDark")
}

console.log(document.cookie)