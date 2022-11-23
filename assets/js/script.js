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

//range

let min = 10;
let max = 100;

const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);

$("#rangeMin").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    min = newValue;
    $("#thumbMin").css("left", calcLeftPosition(newValue) + "%");
    $("#min").html(newValue);
    $("#line").css({
        left: calcLeftPosition(newValue) + "%",
        right: 100 - calcLeftPosition(max) + "%",
    });
});

$("#rangeMax").on("input", function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    max = newValue;
    $("#thumbMax").css("left", calcLeftPosition(newValue) + "%");
    $("#max").html(newValue);
    $("#line").css({
        left: calcLeftPosition(min) + "%",
        right: 100 - calcLeftPosition(newValue) + "%",
    });
});
const carousel = document.querySelector(".carousel");
if (carousel) {
    carousel.style.position = "relative";
    let carouselDots = carousel.querySelector(".carousel__control--dots");
    let carouselItems = document.querySelectorAll(".carousel__item");
    carouselDots.innerHTML = "";
    carouselItems.forEach((element, index) => {
        let span = document.createElement("span");
        const src = element.querySelector("img").src;

        span.style.cursor = "pointer";
        if (screen.width < 992) {
            span.style.width = "5px";
            span.style.height = "5px";
            span.style.backgroundColor = "grey";
        } else {
            span.style.width = "20px";
            span.style.height = "20px";
            span.style.border = "1px solid white";
            const img = document.createElement("img");
            img.src = src;
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.borderRadius = "50%";
            img.style.objectFit = "cover";
            span.appendChild(img);
        }

        span.style.borderRadius = "50%";
        span.style.display = "inline-block";
        span.setAttribute("onclick", "handleClickDot(this)");
        if (index === 0) {
            span.style.backgroundColor = "white";
            element.style.display = "block";
            span.style.border = "2px solid orange";
        } else {
            span.style.backgroundColor = "grey";
            element.style.display = "none";
            span.style.border = "1px solid white";
        }
        carouselDots.appendChild(span);
    });
}
function handleClickDot(element) {
    let carouselItems = document.querySelectorAll(".carousel__item");
    let carouselDots = document.querySelector(
        ".carousel__control--dots"
    ).childNodes;
    if (!Number.isInteger(element)) {
        const index = Array.from(element.parentElement.children).indexOf(
            element
        );
        carouselItems.forEach((item, i) => {
            if (index === i) {
                carouselDots[i].style.backgroundColor = "white";
                carouselDots[i].style.border = "2px solid orange";
                item.style.display = "block";
            } else {
                carouselDots[i].style.backgroundColor = "grey";
                carouselDots[i].style.border = "1px solid white";
                item.style.display = "none";
            }
        });
    } else {
        let index;
        let i = element;
        carouselDots.forEach((item, count) => {
            if (item.style.backgroundColor === "white") {
                index = count;
            }
        });

        if (index === 0 && i < 0) {
            carouselDots[carouselDots.length + i].style.backgroundColor =
                "white";
            carouselDots[carouselDots.length + i].style.border =
                "2px solid orange";
            carouselItems[carouselItems.length + i].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselDots[index].style.border = "1px solid white";
            carouselItems[index].style.display = "none";
        } else if (index === carouselDots.length - 1 && i > 0) {
            carouselDots[0].style.backgroundColor = "white";
            carouselDots[0].style.border = "2px solid orange";
            carouselItems[0].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselDots[index].style.border = "1px solid white";
            carouselItems[index].style.display = "none";
        } else {
            carouselDots[index + i].style.backgroundColor = "white";
            carouselDots[index + i].style.border = "2px solid orange";
            carouselItems[index + i].style.display = "block";
            carouselDots[index].style.backgroundColor = "grey";
            carouselDots[index].style.border = "1px solid white";
            carouselItems[index].style.display = "none";
        }
    }
}
function prevNextSlide(count) {
    handleClickDot(count);
}
