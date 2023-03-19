// const catArray =
// [
//    "./cat-pictures-files/1.JPG",
//    "./cat-pictures-files/2.JPG",
//    "./cat-pictures-files/3.JPG",
//    "./cat-pictures-files/4.JPG",
//    "./cat-pictures-files/5.JPG",
//    "./cat-pictures-files/6.JPG",
// ];

const catArray =
[
    "cat-pictures-files/jambo.jpeg",
    "cat-pictures-files/impostor1.webp",
    "cat-pictures-files/1.JPG",
    "cat-pictures-files/2.JPG",
    "cat-pictures-files/3.JPG",
    "cat-pictures-files/4.JPG",
    "cat-pictures-files/5.JPG",
    "cat-pictures-files/6.JPG",
    "cat-pictures-files/7.JPG",
    "cat-pictures-files/8.JPG",
    "cat-pictures-files/9.JPG",
    "cat-pictures-files/10.JPG",
    "cat-pictures-files/11.JPG",
    "cat-pictures-files/12.JPG",
    "cat-pictures-files/13.JPG",
    "cat-pictures-files/14.JPG",
    "cat-pictures-files/15.JPG",
    "cat-pictures-files/16.JPG",
    "cat-pictures-files/17.JPG",
    "cat-pictures-files/18.JPG",
    "cat-pictures-files/19.JPG",
    "cat-pictures-files/20.JPG"
];

const image = document.querySelector("img");

const button = document.querySelector("button");

window.onload = () => showImage(catArray);

button.addEventListener("click", () => showImage(catArray));

function showImage(array)
{
    let index = Math.floor(Math.random()*array.length);

    image.setAttribute("src", array[index]);
}
