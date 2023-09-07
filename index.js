// Задание 1

// При изменении значения в input с id="from", значение содержащееся в нем должно
// моментально отображаться в span. То есть при печати в input'е тег span также
// должен меняться.

// ---------------------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 1');
console.log('--------------------------------------------------------------------');

const inputEl = document.querySelector('#from');

const inputHeader = () => {
  inputEl.nextElementSibling.innerHTML = inputEl.value;
};

inputEl.addEventListener('input', inputHeader);

// ---------------------------------------------------------------------------------
// Задание 2

// При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// ---------------------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 2');
console.log('--------------------------------------------------------------------');

const btnEl = document.querySelector('.messageBtn');
const divEl = document.querySelector('.message');

btnEl.addEventListener('click', () => {
  divEl.style.visibility === 'hidden' ? show() : hiden();
});

const show = () => {
  divEl.classList.add('animate_animated');
  divEl.classList.add('animate_fadeInLeftBig');
  divEl.style.visibility = 'visible';
};

const hiden = () => {
  divEl.classList.remove('animate_animated');
  divEl.classList.remove('animate_fadeInLeftBig');
  divEl.style.visibility = 'hidden';
};

// ---------------------------------------------------------------------------------
// Задание 3

// Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если
// какое-либо поле не заполнено, форма не должна отправляться, также должны быть
// подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в
// данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному
//   полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// ---------------------------------------------------------------------------------
console.log('--------------------------------------------------------------------');
console.log('Задание 3');
console.log('--------------------------------------------------------------------');

const formEl = document.querySelector('.form');
const submitEl = formEl.querySelector('#submit');
const formControl = formEl.querySelectorAll('.form-control');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  formControl.forEach((e) => {
    if (e.value === '') {
      e.setCustomValidity('Пустое поле');
    } else if (e.value !== '') {
      console.log(e.value);
    }
    e.reportValidity();
  });
});

formControl.forEach((e) => {
  e.addEventListener('input', () => {
    e.setCustomValidity('');
  });
});

// ---------------------------------------------------------------------------------
