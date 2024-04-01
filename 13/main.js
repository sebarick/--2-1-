const convert = () => {
    const inputNumber = parseFloat(document.querySelector('.converter-input').value);
    let from = document.querySelector('#from').value;
    let to = document.querySelector('#to').value;
    let result;

    if (from === "cm" && to === "m") {
        result = inputNumber / 100;
        result += " m";
    } else if (from === "cm" && to === "km") {
        result = inputNumber / 100000;
        result += " km";
    } else if (from === "m" && to === "cm") {
        result = inputNumber * 100;
        result += " cm";
    } else if (from === "m" && to === "km") {
        result = inputNumber / 1000;
        result += " km";
    } else if (from === "km" && to === "cm") {
        result = inputNumber * 100000;
        result += " cm";
    } else if (from === "km" && to === "m") {
        result = inputNumber * 1000;
        result += " m";
    } else {
        alert("Выбраны одинаковые единицы измерения");
        return;
    }

    let divResult = document.querySelector('#result');
    divResult.style.display = 'block';
    divResult.innerText = "Результат: " + result;
}
