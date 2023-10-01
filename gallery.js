// console.log("hello world");

document.addEventListener('DOMContentLoaded', function ()
{
    const groups = [];

    const fs = require('fs');
    const path = require('path');

    function addItemsFromFolderToList(folderName)
    {
        const list = [];
        const folderPath = path.join(__dirname, folderName);
        fs.readdir(folderPath, (err, files) =>
        {
            if (err)
            {
                console.error('Error reading folder:', err);
                return;
            }
            const fileList = files.filter(file => fs.statSync(path.join(folderPath, file)).isFile());
            fileList.forEach(file =>
            {
                list.push(file);
            });
            console.log('List of items:', list);
        });
        groups.push(list);
    }

    addItemsFromFolderToList('Gallery-Asakusa');
    addItemsFromFolderToList('Gallery-MeijiJingu');
    addItemsFromFolderToList('Gallery-TokyoNight');
    addItemsFromFolderToList('Gallery-Jkt');


});
