1. DOM (Document Object Modal) - Програмное представление веб-страницы, с помощью которого разработчик может манипулировать содержимым страницы.
2. DOM у нас сущетвует в рамках браузер, в терминале с ним работать не получется
3. Есть несколько способов для обрщение к элементы в js:
    --3.1 getElementById - метод документа(documnet), с помощью которого мы можем обращятся к html элементы через его id.
    --3.2 querySelector - метод который позволяет обращятся к элементу по названию класса, id, названию тега, атибуту.
    --3.2 querySelecotAll - тот же метод как querySelector, за исключением того что он нам возращают коллекцию элементов (условно говоря массоив)
    --3.3 getElementByTagName - метод который возращает элемент по названию тега.
    --3.4 getElementByClassName - метод который озращают коллекцию элементов (условно говоря массоив) по названию класса

4. textContent - сущность DOM элемента, с помощью него мы можем изменять содержимое тега.
5. Для работы с css классами есть сущность у DOM элементов под название "classList". У него есть 3 метода:
     --5.1 add() - добавляет к выбранному элмеенту класс. Класс прописываем в круглых скобках через "".
     --5.2 remove() - удаляет от выбранного элмеента класс. Класс прописываем в круглых скобках через "".
     --5.2 toggle() - он проверяет если у выбранного элемента есть данноый класс то его удаляет, если нет этого класса то он его добяляет.


6. Мы можем передать колбек фунцкию несколькими способами:
    --6.1 Сразу написать функцию как второй параметр
    --6.2 Синициализировать функцию заранее и вызвать ее в качестве 2ого параемта
    --6.3 ОЧЕНЬ ВАЖНО!!!!! При передаче функции ее не вызвыат(не ставить кртуглие скобки). При поставлении круглых скобок данная функция сразу срабатывает, не ожидая определенного события