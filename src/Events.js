import { once } from 'events';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let unorderedList = document.createElement('ul');
    for (let elem of arr) {
        let listItem = document.createElement('li');
        listItem.innerHTML = elem;
        listItem.addEventListener('mouseover', () => {
            listItem.setAttribute('title', elem);
        });
        unorderedList.append(listItem);
    }
    document.body.appendChild(unorderedList);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    let textLink = 'https://tensor.ru/';
    link.setAttribute('href', textLink);
    link.innerHTML = 'tensor';
    link.addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            link.innerHTML += ' ' + textLink;
        },
        { once: true },
    );
    document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let unorderedList = document.createElement('ul');
    let createListItem = function () {
        let listItem = document.createElement('li');
        listItem.innerHTML = 'Пункт';
        listItem.addEventListener('click', () => {
            listItem.innerHTML += '!';
        });
        unorderedList.appendChild(listItem);
    };
    createListItem();
    let button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.addEventListener('click', () => {
        createListItem();
    });
    document.body.appendChild(unorderedList);
    document.body.appendChild(button);
}
