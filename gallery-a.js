document.addEventListener("DOMContentLoaded", function ()
{
    const carouselContainer = document.querySelector(".gallery-a");

    const images =
    [
        "./public/Asakusa/as-1.jpg",
        "./public/Asakusa/as-2.jpg",
        "./public/Asakusa/as-3.jpg",
        "./public/Asakusa/as-4.jpg",
        "./public/Asakusa/as-5.jpg",
        "./public/Asakusa/as-6.jpg"
    ];

    // let currentIndex = 0;

    // function showSlide(index) {
    //     const imageURL = images[index];
    //     carouselContainer.style.backgroundImage = `url(${imageURL})`;
    // }

    // function nextSlide() {
    //     currentIndex = (currentIndex + 1) % images.length;
    //     showSlide(currentIndex);
    // }

    // function startCarousel() {
    //     setInterval(nextSlide, 3000); // Change image every 3 seconds (adjust as needed)
    // }

    // showSlide(currentIndex);
    // startCarousel();

    images.forEach((oneImg) => {
        const imgElement = document.createElement('img');
        imgElement.src = oneImg;
        carouselContainer.appendChild(imgElement);
    });
});
