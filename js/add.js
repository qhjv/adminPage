$(document).ready(function () {
    const tabsMenu = document.querySelectorAll("li.navbar-li")
    const tabsMenuai = document.querySelectorAll("li.navbar-li a")
    const tabsContent = document.querySelectorAll(".pageview")
    tabsMenu.forEach((tab,index) => {
        tab.onclick= function(){
           $(".navbar-nav .active").removeClass('active')
           $(".adminview .pageon").removeClass('pageon')
            this.classList.add('active')
            tabsMenuai[index].classList.add('active')
            tabsContent[index].classList.add('pageon')
        }
    })
})