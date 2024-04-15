const saveData = () => {
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const author = document.querySelector("#author").value;
    const publishDate = document.querySelector("#publishDate").value;

    let storeData = JSON.parse(localStorage.getItem("articles")) || [];

    let userData = {
        title: title,
        content: content,
        author: source,
        publishDate: publishDate,
    };

    storeData.push(userData);

    localStorage.setItem("articles", JSON.stringify(storeData));
    getData();
}

const getData = () => {
    let resultData = document.querySelector("#resultData");
    let storeData = JSON.parse(localStorage.getItem("articles")) || [];

    resultData.innerHTML = "";

    if (storeData && storeData.length > 0) {
        storeData.forEach((userData, index) => {
            resultData.innerHTML += `<li>Заголовок: ${userData.title}</li>`;
            resultData.innerHTML += `<li>Описание: ${userData.content}</li>`;
            resultData.innerHTML += `<li>Источник: ${userData.source}</li>`;
            resultData.innerHTML += `<li>Дата публикации: ${userData.publishDate}</li>`;
            resultData.innerHTML += `<button onclick="deleteData(${index})">Удалить</button>`;
            resultData.innerHTML += `<hr><br>`;
        });
    } else {
        resultData.innerHTML += "<li>Данные не найдены</li>"
    }
}

const deleteData = (index) => {
    let storeData = JSON.parse(localStorage.getItem("articles")) || [];
    storeData.splice(index, 1);
    localStorage.setItem("articles", JSON.stringify(storeData));
    getData();
}

window.onload = () => {
    getData();
}
