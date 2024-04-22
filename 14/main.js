// После загрузки контента страницы...
document.addEventListener("DOMContentLoaded", () => {
    // Получаем ссылки на кнопки, модальное окно и контейнер для данных
    const addBtn = document.querySelector("#addBtn");
    const modal = document.querySelector("#myModal");
    const saveBtn = document.querySelector("#saveBtn");
    const closeBtn = document.querySelector(".close");
    const dataContainer = document.querySelector("#data");

    // Переменная для хранения индекса элемента, который используется 
    let editIndex = -1;

    // Кнопка "Добавить"
    addBtn.addEventListener("click", () => {
        //  Модальное окно при нажатии наа кнопку
        modal.style.display = "block";
    });

    // Закрытие модального окна
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        // Очищение формы в модальном окне
        clearForm();
    });
    
    // Кнопка "Сохранить"
    saveBtn.addEventListener("click", () => {
        // Получение значения полей формы
        const name = document.querySelector("#name").value;
        const phone = document.querySelector("#phone").value;
        const email = document.querySelector("#email").value;
        const status = document.querySelector("#status").value;

        // Проверка, редактируется ли элемент
        if (editIndex === -1) {
            // Если нет, добавляется новый элемент
            addData({ name, phone, email, status });
        } else {
            // Если редактируется, сохраняется измененный элемент
            editData(editIndex, { name, phone, email, status });
            editIndex = -1;
        }

        // Закрытие модального окна и очищение формы
        modal.style.display = "none";
        clearForm();
        displayData();
    });

    // Функ. для добавления эл-та в localStorage
    const addData = (item) => {
        let items = localStorage.getItem("data");
        items = items ? JSON.parse(items) : [];
        items.push(item);
        localStorage.setItem("data", JSON.stringify(items));
    };
    const editData = (index, newData) => {
        let items = JSON.parse(localStorage.getItem("data"));
        items[index] = newData;
        localStorage.setItem("data", JSON.stringify(items));
    };

    // Функ. для удаления эл-та из localStorage
    const deleteData = (index) => {
        let items = JSON.parse(localStorage.getItem("data"));
        items.splice(index, 1);
        localStorage.setItem("data", JSON.stringify(items));
        // Обновление отображения данных после удаления
        displayData();
    };

    // Функ. для отображения данных из localStorage
    const displayData = () => {
        let items = JSON.parse(localStorage.getItem("data"));
        if (!items) return;

        // Очистка контейнера перед отображением данных 
        dataContainer.innerHTML = "";

        // Проходим по каждому жл-ту и добавляем его в контейнер
        items.forEach((item, index) => {
            const div = document.createElement("div");
            // Создаем HTML-разметку для эл-та
            div.innerHTML = `
                <p><strong>ФИО:</strong> ${item.name}</p>
                <p><strong>Номер телефона:</strong> ${item.phone}</p>
                <p><strong>Адрес эл.почты:</strong> ${item.email}</p>
                <p><strong>Статус:</strong> ${item.status}</p>
                <button class="btn btn-secondary edit-btn" data-index="${index}">Редактировать</button>
                <button class="btn btn-danger delete-btn" data-index="${index}">Удалить</button>
            `;
            // Добавление созданного эл-та в контейнер
            dataContainer.appendChild(div);
        });

        // Добавление обработчика событий для кнопок "Редактировать" и "Удалить"
        const editBtns = document.querySelectorAll(".edit-btn");
        editBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                //Получаем индекс редактир-го эл-та и отображаем его в модальном окне
                const index = parseInt(btn.getAttribute("data-index"));
                editIndex = index;
                const item = JSON.parse(localStorage.getItem("data"))[index];
                document.querySelector("#name").value = item.name;
                document.querySelector("#phone").value = item.phone;
                document.querySelector("#email").value = item.email;
                document.querySelector("#status").value = item.status;
                modal.style.display = "block";
            });
        });

        const deleteBtns = document.querySelectorAll(".delete-btn");
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Получаем индекс удаляемого эл-та и удаляем его
                const index = parseInt(btn.getAttribute("data-index"));
                deleteData(index);
            });
        });
    };

    // Очистки формы
    const clearForm = () => {
        document.querySelector("#name").value = "";
        document.querySelector("#phone").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#status").value = "Преподаватель";
    };

    // Отображение данных из LocalStorage
    displayData();
