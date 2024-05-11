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

        // 添加点击事件处理程序
        listItem.addEventListener('click', () => {
            // 检查file.name是否是一个链接
            if (isURL(file.name)) {
                window.open(file.name, '_blank'); // 在新标签页中打开链接
            } else {
                window.open(`doc/${file.name}`, '_blank'); // 在新标签页中打开文件
            }
        });

        fileList.appendChild(listItem);
    });
}

// 函数用于检查字符串是否是URL
function isURL(str) {
    // 此处简单地使用正则表达式来检查是否以http或https开头
    return /^https?:\/\//.test(str);
}
