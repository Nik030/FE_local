1. Для того чобы js файл заработал надо его подключить к нашем html
2. JS подключается в html-e с самом конце тега body через тег script и атрибут src="". В src пишем директорию нашего js файла
3. Extension Live Server запускаем только в html, НЕ в JS и не в CSS.
4. В JS-e рзделзют ссылочные и не ссылочные(примитивы) типы данных
5. Не ссылчные(примиты):
   --1. Строки
   --2. Числа
   --3. булево значение (truе/false)
   --4. undefined
   --5. null
   --6. NaN - Not A Number

6. Ссылочные типы данных:
   --1. Объекты (объект, массив)
7. Инициализация это создание какой то сущности(объект, примитивный тип данных, функция...)
8. Let VS var
   --1. Если мы испольуем VAR то можем заного задиклорировать переменную, она просто у нас перезапишется. Мы можем использовать переменную которая была объявлена через var до ее инциализации.
   --2. Если мы испольуем LET то не можем заного задиклорировать переменную, появится ошибка что такая переменная уже существует. Мы не можем использовать переменную которая была объявлена через let до ее инциализации. Появится ошибка что нельза использовать переменную до ее инциализации.

9. CONTS
   --1. Нельзя менять значение у константной переменной
   --2. Также как и let нельзя использовать до инициализации

10. JS в браузере и в термниале отличаются по след причинам:
    --1. Есть большое количество функционала которое предоставляется браузером (prompt, alert, confirm).
    Соответсрвенно у нас все эти методы, функции не будут работать
    в терминале.
    --1.1 Prompt - это браузерное окно которое может хранить значнеие введных данных
    --1.2 Alert - это браузерное окно которое нам выводит текст
    --1.3 Confirm - это браузерное окно которое выводит текст, и вариант ответа "ДА" или "Нет"
    --2. В термниале (бэкенде), работа языка быстрее чем в браузере

11. Есть =, ==, ===
    --1. = - это у нас оператор присваинцания
    --2. == - это проверка на то что два элемента с их значениями равны. Сравнение идет по значению 22 == "22" -> true -> 22 == 22 -> не смотрит на тип данных
    --3. === это проверка на то что два элемента с их значениями и типами данных равны.Сравнение идет по значению и типам данных 22 === "22" -> false -> 22 === "22" -> смотрит на тип данных

12. !
    --1. != - делаем не строгое не равно. То есть проверяем только значение
    --2. !== - делаем строгое не равно. To есть проверяем на значение и тип данных
    --3. ! - переварачивает значние boolean нааборот (false->true, true->false) и меняет тип данных на boolean
    Примерчание:
    == -> !=
    === -> !==