document.addEventListener('DOMContentLoaded', function ()
{
    const fs = require('fs');
    const path = require('path');

    const folderPaths = [
    './Gallery-Asakusa',
    './Gallery-MeijiJIngu',
    ];

    const photoData = {};
    const groupContainer = document.querySelector('.section1');
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
        displayPhotos(folderName, photoData[folderName]);
        });
    });

    function displayPhotos(folderName, photoArray)
    {
        const thisGroup = document.createElement('div');
        thisGroup.className = folderName;

        photoArray.forEach(photo => {
            const photoElement = document.createElement('img');
            photoElement.src = `${folderName}/${photo}`;
            photoElement.alt = photo; // Set alt text for accessibility
            thisGroup.appendChild(photoElement);
        });

        groupContainer.appendChild(thisGroup);
    }

});
