const images = [
    'images/img.jpg',
    'images/img1.jpg',
    'images/img3.jpg',
    'images/img4.jpg'
];

let imgIndex = 0;
const img = document.getElementById('image-slider');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgLink = images[imgIndex];
    img.setAttribute('src', imgLink)
    imgIndex++
}, 2000);
// setInterval(() => {
//     if (imgIndex === images.length) {
//         imgIndex = 0;
//     }
//     const imgLink = images[imgIndex];
//     img.setAttribute('src', imgLink)
//     imgIndex++;
// }, 1500);