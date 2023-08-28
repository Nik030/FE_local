// создаем переменную для хранения ссылки
let url = `https://fakestoreapi.com/products/`;
// создаем переменную main где будем помещать наши товары
let main = document.querySelector("#product");

// асинхорнную функция где хранится вся логика
async function doc() {
    // создаем переменную response для хранения результата запроса
    let respons = await fetch(url)
    // создаем переменную data в которой асинхронно записываем response в виде json-а
    let data = await respons.json();
    // циклично создаем элементы для каждого продукта
    for (let i = 0; i < data.length; i++) {
        // создаем div
        let info = document.createElement("div");
        // добавляем класс info
        info.classList.add("info");
        // создаем элемент img где будем хранить изобраэение итеруремого продукта
        let img = document.createElement('img');
        // в картинку передаем ссылку на элемент
        img.src = String(data[i]["image"]);
        // создаем переменную price где будет хранится итеруремая цена продукта
        let price = document.createElement("h1");
        // записываем стоимость итеруемого продукта
        price.textContent = "Price: " + data[i]["price"];
        // создаем переменную title где будет хранится название продукта
        let title = document.createElement("h1");
        // создаем переменную reating где будет содержатся рейтинг итерируемого продукта
        let raiting = document.createElement("h1");
        // присваеваем оценку продукта
        raiting.textContent = "Raiting: " + data[i]["rating"]["rate"];
        //  с 33 по 41 строку длеам проверку исодя из этого проставляем стиль raiting
        if (data[i]["rating"]["rate"] > 4) {
            raiting.style.color = "green";
        }
        else if (data[i]["rating"]["rate"] < 3) {
            raiting.style.color = "red";
        }
        else if (data[i]["rating"]["rate"] > 3 && data[i]["rating"]["rate"] < 4 || data[i]["rating"]["rate"] === 3) {
            raiting.style.color = "orange";
        }
        // описываем стили картинки
        img.style.height = "400px";
        img.style.width = "200px";
        // title присваеваем цену title
        title.textContent = "Price:" + data[i]["title"];
        // добавляем в блок info
        info.append(title, img, price, raiting);
        // в main добавляем элемент info
        main.appendChild(info);
    }
    // создаем переменную allItems где будет выборка всех элементов с классом info
    let allItems = document.querySelectorAll(".info");
    // создаем переменную где будет хранится новый div где будут попадать все выбранные элемнеты 
    let chose = document.createElement("div");
    // 57 по 64 добавляем обработчик события клика чотбы выбранный элементы добавлялся в DOM
    allItems.forEach((e) => {
        e.addEventListener("click", () => {
            chose.appendChild(e);
            chose.classList.add('product');
            document.body.appendChild(chose);
            console.log(allItems);
        })
    })
    console.log(data);
}
doc();