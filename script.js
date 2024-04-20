// OM - это сокращение от "Document Object Model", или модель объектов документа на русском. 
// Это основной способ представления веб-страницы в браузере при помощи древовидной структуры объектов.


// 1. Структура HTML-документа: Когда ты открываешь веб-страницу в браузере, 
// браузер интерпретирует HTML-код и создает структуру, которую мы называем DOM. 
// Эта структура представляет собой древовидное представление всех элементов HTML-страницы.

// 2. Объекты DOM: Каждый элемент HTML-страницы (такой как заголовок <h1>, параграф <p>, 
// кнопка <button>, и т.д.) представлен в DOM как объект. 
// Эти объекты можно программно обрабатывать и изменять с помощью JavaScript.

// 3. Доступ и изменение элементов: JavaScript позволяет нам получать доступ к элементам DOM 
// и изменять их содержимое, стили, атрибуты и другие свойства.
// Мы можем делать это с помощью методов и свойств, предоставляемых DOM API.

// 4. Интерактивность и динамическое изменение: Одно из ключевых преимуществ 
// использования DOM в JavaScript заключается в возможности
// создавать интерактивные веб-страницы. Мы можем реагировать 
// на события пользователя (например, клики мыши, нажатия клавиш) 
// и изменять содержимое страницы в реальном времени без необходимости перезагрузки страницы.

// 5. Пример: Например, если ты хочешь изменить текст абзаца <p> на странице, 
// ты можешь получить доступ к этому элементу в DOM с помощью JavaScript, 
// изменить его текстовое содержимое.

console.log(document);

// const item = document.querySelector('.item'); 
// querySelector - это метод в JavaScript, 
// который используется для поиска элементов в DOM 
// с помощью селекторов CSS и возвращает первый элемент, соответствующий указанному селектору.

// console.log(item);
console.log(document.body);



// Билет 6:
// Как работают и для чего используются селекторы в CSS? Приведите примеры.
// 2. Используя селекторы, напишите CSS-стили, которые будут применяться к элементам с определенным классом.



// Что такое селекторы?

// Селекторы CSS позволяют выбирать элементы на веб-странице для применения к ним стилей. 
// Вот простой пример использования:

// 1. Селектор по типу элемента: Этот селектор выбирает все элементы определенного типа.
// p {
    // color: blue;
// }
// 2. Селектор по классу: Этот селектор выбирает все элементы с определенным классом.
// .highlight {
    // background-color: yellow;
// }
/* Выбор элемента с id "header" и установка размера шрифта 24px */
// #header {
    // font-size: 24px;
// }

// Такие правила определяют, какие стили будут применены к выбранным элементам на странице.

// item.addEventListener("click", function() /*  это метод в JavaScript, который используется для 
// прослушивания определенных событий на элементе DOM и выполнения определенной функции (обработчика) 
// при возникновении события. 
// Этот метод позволяет создавать интерактивные веб-приложения, реагирующие на действия пользователя. */ {
//   // console.log('Button was clicked');
//   // item.style.background = "red"
//   // console.log(item.style.background);
//   if(item.style.background == "black"){
//      item.style.background = "red"
//   } else {
//     item.style.background = "black"
//   }
// })

// item.addEventListener('dblclick', ()=> {
//     console.log('double click');
// })

// item.addEventListener('mouseover', () => { 
//   /* Так называемый вход мыши */
//   document.body.style.background = 'orange'
// })

// item.addEventListener(('mouseout'), () => {
//   document.body.style.background = '#fff'
// })

// document.addEventListener('keyup', event =>{
//   // console.log(event);
//   // console.log(event.code);
//   if(event.code == "Enter"){
//     console.log("Enter");
//   }
// }) 


// let item = document.querySelector('.item'); 

// if(item.hasAttribute("data-bg")){ /* используется для проверки наличия определенного а
// трибута у элемента DOM. Он возвращает булево значение */
//   console.log("status 200");

//   item.setAttribute('src', "img/01.png") /* используется для установки значения атрибута элемента DOM. 
//   Он принимает два аргумента: 
//   имя атрибута, который вы хотите установить, и значение этого атрибута. */

//   item.removeAttribute('class')

//   item.getAttribute('data-bg') /* используется для получения значения определенного 
//   атрибута элемента DOM */

//   console.log(item.getAttribute('data-bg'));
// }

// Смена цвета фона

// let item = document.querySelectorAll('.item');
// // console.log(item);

// for (let i = 0; i < item.length; i++) {
//   const x = item[i]
//   // console.log(item[i]); 
//   item[i].style.background = item[i].getAttribute("data-bg")
  
//   item[i].addEventListener('click', () => {
//     // console.log(item[i].getAttribute('data-bg'));
//     document.body.style.background = item[i].getAttribute('data-bg')
//   })
// }





function randColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
// randColor()
console.log(randColor());

function randDeg() {
  return Math.floor(Math.random() * 361)
}

let card = document.querySelectorAll('.card');
let card_2 = document.querySelectorAll('.card_2');

// linear-gradient(360deg, rgb(83, 11, 250), rgb(83, 11, 250))

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', () => {
    card[i].style.background = randColor()
  })  
  card_2[i].addEventListener('click', () => {
    card_2[i].style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()})`
  })
}




// TRAFFIC LIGHT

// const red    = document.querySelector('.red')
// red.classList.add('active')

function changeClassActive() {
  const items     = document.querySelectorAll('.traffic-light-item')
  let activeIndex = -1
  
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains('active')) {
      activeIndex = i
      break;
    }
  }
  
  items[activeIndex].classList.remove('active');
  const nextIndex = (activeIndex + 1) % items.length 
  // console.log(nextIndex); 
  items[nextIndex].classList.add('active') 
}

setInterval(changeClassActive, 5000); 
document.querySelector('.traffic-light-item').classList.add('active');
// это функция в JavaScript, которая используется для выполнения указанной функции или кода через определенные промежутки времени. 
// Она принимает два аргумента: функцию, которая должна быть выполнена, и интервал времени в миллисекундах между последовательными вызовами этой функции.






