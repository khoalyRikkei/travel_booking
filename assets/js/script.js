function handleToggleMenu(element) {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelectorAll(".sidebar--toggle");
    const btnClose = document.querySelector("#sidebar--toggle-close");
    const btnOpen = document.querySelector("#sidebar--toggle-open");
    const siderBar = document.querySelector(".sidebar--bar");

    if (element.id === "sidebar--toggle-open") {
        btnOpen.style.display = "none";
        btnClose.style.display = "block";
        sidebar.style.width = "240px";
        siderBar.style.justifyContent = "space-between";
        sidebarToggle.forEach((item) => {
            item.style.display = "inline";
            item.closest("div").style.padding = "10px 16px";
            if (
                item.classList.value.includes("logo") ||
                item.closest(".btn--2")
            ) {
                item.style.padding = 0;
            }
        });
        sidebar.style.width = "240px";
        sidebar.querySelector(".sidebar--menu").style.padding =
            "75px 46px 180px 24px";
    } else {
        btnClose.style.display = "none";
        btnOpen.style.display = "block";
        sidebar.style.width = "80px";
        sidebar.querySelector(".sidebar--menu").style.padding =
            "75px 31px 170px 31px";
        siderBar.style.justifyContent = "center";
        sidebarToggle.forEach((item) => {
            item.style.display = "none";
            item.closest("div").style.padding = "10px 0";
            if (item.closest(".btn--2")) {
                // item.closest('.btn--2').style.paddingRight = 0;
                item.closest(".btn--2").style.width = "180px";
                item.style.padding = 0;
            }
        });
    }
}

//

$(".slick-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
});
