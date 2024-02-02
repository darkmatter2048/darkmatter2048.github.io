window.onload = function() {
    fetchFileList();
};

function fetchFileList() {
    fetch('fileList.json')
        .then(response => response.json())
        .then(data => displayFileList(data.files));
}

function displayFileList(files) {
    const fileList = document.getElementById('file-list');
    files.forEach(file => {
        const listItem = document.createElement('li');
        listItem.style.textAlign = "center";
        
        const coverImage = document.createElement('img');
        coverImage.src = file.cover_image;
        coverImage.alt = "Cover Image";
        coverImage.style.width = "50%";
        coverImage.style.height = "30%";
        listItem.appendChild(coverImage);
        
        const fileName = document.createElement('div');
        fileName.textContent = file.description; // 使用文件简介代替文件名
        fileName.className = "fileName"; // 添加类名
        listItem.appendChild(fileName);

        const fileDate = document.createElement('div');
        fileDate.textContent = file.created_at;
        fileDate.style.textAlign = "center";
        listItem.appendChild(fileDate);

        listItem.addEventListener('click', () => {
            window.location.href = `doc/${file.name}`;
        });

        fileList.appendChild(listItem);
    });
}
