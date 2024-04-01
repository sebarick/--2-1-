function calculateShipping() {
    var senderFirstName = document.getElementById("senderFirstName").value;
    var senderLastName = document.getElementById("senderLastName").value;
    var senderMiddleName = document.getElementById("senderMiddleName").value;
    var recipientFirstName = document.getElementById("recipientFirstName").value;
    var recipientLastName = document.getElementById("recipientLastName").value;
    var recipientMiddleName = document.getElementById("recipientMiddleName").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var shippingType = document.getElementById("shippingType").value;
    var country = document.getElementById("country").value;
    var shippingCost = 0;

    if (shippingType === "regular") {
        shippingCost = weight * 5;
        if ((country === "USA" || country === "Canada") && weight <= 5) {
            shippingCost = 0;
        }
        if (weight > 10) { 
            shippingCost *= 2;
        }
    } else if (shippingType === "express") { 
        shippingCost = weight * 10 + 20; 
    }

    var modal = document.getElementById("modal");
    var modalContent = document.getElementById("results");
    modalContent.innerHTML = "<p><strong>Отправитель:</strong> " + senderLastName + " " + senderFirstName + " " + senderMiddleName + "</p>" + 
        "<p><strong>Получатель:</strong> " + recipientLastName + " " + recipientFirstName + " " + recipientMiddleName + "</p>" + 
        "<p><strong>Вес посылки:</strong> " + weight.toFixed(2) + " кг</p>" + 
        "<p><strong>Тип доставки:</strong> " + (shippingType === "regular" ? "Обычная" : "Экспресс") + "</p>" + 
        "<p><strong>Страна доставки:</strong> " + country + "</p>" + 
        "<p><strong>Стоимость доставки:</strong> $" + shippingCost.toFixed(2) + "</p>"; 
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
