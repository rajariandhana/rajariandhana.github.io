// document.addEventListener('DOMContentLoaded', function ()
// {

//     const carousel = document.querySelector(".carousel");

//     const buttonPrev = document.querySelector(".buttonPrev");
//     const buttonNext = document.querySelector(".buttonNext");

//     const firstImg = carousel.querySelectorAll("img")[0];
//     let firstImgWidth = firstImg.clientWidth + 10;
//     // console.log(firstImgWidth);
//     // console.log(firstImg.clientWidth);
//     buttonPrev.addEventListener("click", function()
//     {
//         carousel.scrollLeft -= firstImgWidth;
//         // console.log("hai");
//     });

// });

// document.addEventListener('DOMContentLoaded', function () {
//     const carousel = document.querySelector(".carousel");
//     const buttonPrev = document.querySelector(".buttonPrev");
//     const buttonNext = document.querySelector(".buttonNext");
//     const images = carousel.querySelectorAll("img");
//     const visibleImages = 1;
//     let currentIndex = 0;
//     const imageWidth = images[0].clientWidth + 10; // Adjust for margin or padding

//     buttonPrev.addEventListener("click", function() {
//         currentIndex = Math.max(currentIndex - visibleImages, 0);
//         scrollToCurrentImage();
//         // console.log("hai");
//     });

//     buttonNext.addEventListener("click", function() {
//         currentIndex = Math.min(currentIndex + visibleImages, images.length - visibleImages);
//         scrollToCurrentImage();
//         // console.log("hai");
//     });

//     function scrollToCurrentImage() {
//         carousel.scrollLeft = currentIndex * imageWidth;
//         // carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector(".carousel");
    const buttonPrev = document.querySelector(".buttonPrev");
    const buttonNext = document.querySelector(".buttonNext");
    const images = carousel.querySelectorAll("img");
    const visibleImages = 1;
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth + 10; // Adjust for margin or padding

    buttonPrev.addEventListener("click", function() {
        currentIndex = (currentIndex - visibleImages + images.length) % images.length;
        scrollToCurrentImage();
    });

    buttonNext.addEventListener("click", function() {
        currentIndex = (currentIndex + visibleImages) % images.length;
        scrollToCurrentImage();
    });

    function scrollToCurrentImage() {
        carousel.scrollLeft = currentIndex * imageWidth;
    }

    // Function to handle wrapping from last to first when Next is clicked
    function wrapAroundToFirst() {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        scrollToCurrentImage();
    }

    // Add an event listener to the last image to wrap around when clicked
    images[images.length - 1].addEventListener("click", wrapAroundToFirst);
});
