// document.addEventListener('DOMContentLoaded', function ()
// {
    const fs = require('fs');
    const path = require('path');

    const folderPaths = [
    './Gallery-Asakusa',
    './Gallery-MeijiJIngu',
    ];

    const photoData = {};

    folderPaths.forEach(folderPath =>
    {
        fs.readdir(folderPath, (err, files) => {
        if (err)
        {
            console.error('Error reading folder:', err);
            return;
        }

        const imageFiles = files.filter(file =>{
            const ext = path.extname(file).toLowerCase();
            return ext === '.jpg' || ext === '.png' || ext === '.jpeg';
        });

        const folderName = path.basename(folderPath);
        photoData[folderName] = imageFiles;
        fs.writeFileSync(`${folderName}_photos.js`, `const ${folderName} = ${JSON.stringify(imageFiles)};`);
    });
    });


    // const groupContainer = document.querySelector('.section1');
    // photoData.forEach(folderName =>
    // {
    //     const thisGroup = document.createElement('div');
    //     thisGroup.className = folderName;
    //     photoData[folderName].forEach(photo => {
    //         const photoElement = document.createElement('img');
    //         photoElement.src = photo.image;
    //         thisGroup.appendChild(photoElement);
    //     });
    //     groupContainer.appendChild(thisGroup);
    // });
// });
// // Function to display photos from an array
// function displayPhotos(folderName, photoArray) {
//     const folderDiv = document.createElement("div");
//     const folderTitle = document.createElement("h2");
//     folderTitle.textContent = folderName;
//     folderDiv.appendChild(folderTitle);

//     photoArray.forEach(photoName => {
//     const img = document.createElement("img");
//     img.src = `${folderName}/${photoName}`; // Assuming photos are in subfolders named after folders
//     img.alt = photoName;
//     folderDiv.appendChild(img);
//     });

//     photoContainer.appendChild(folderDiv);
// }

// // Loop through photoData and display photos for each folder
// for (const folderName in photoData)
// {
//     displayPhotos(folderName, photoData[folderName]);
// }


// document.addEventListener('DOMContentLoaded', function () {
//     const fs = require('fs');
//     const path = require('path');

//     const folderPaths = [
//         './Gallery-Asakusa',
//         './Gallery-MeijiJIngu',
//     ];

//     const photoData = {};

//     folderPaths.forEach(folderPath => {
//         fs.readdir(folderPath, (err, files) => {
//             if (err) {
//                 console.error('Error reading folder:', err);
//                 return;
//             }

//             const imageFiles = files.filter(file => {
//                 const ext = path.extname(file).toLowerCase();
//                 return ext === '.jpg' || ext === '.png' || ext === '.jpeg';
//             });

//             const folderName = path.basename(folderPath);
//             photoData[folderName] = imageFiles;

//             // Call a function to display photos after loading
//             displayPhotos(folderName, photoData[folderName]);
//         });
//     });

//     const groupContainer = document.querySelector('.section1');

//     // Function to display photos from an array
//     function displayPhotos(folderName, photoArray) {
//         const thisGroup = document.createElement('div');
//         thisGroup.className = folderName;

//         photoArray.forEach(photo => {
//             const photoElement = document.createElement('img');
//             photoElement.src = `${folderName}/${photo}`;
//             photoElement.alt = photo; // Set alt text for accessibility
//             thisGroup.appendChild(photoElement);
//         });

//         groupContainer.appendChild(thisGroup);
//     }
// });
