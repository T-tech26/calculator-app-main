const body = document.querySelector('.body')
const themeOne = document.querySelector('#theme-one');
const themeTwo = document.querySelector('#theme-two');
const themeThree = document.querySelector('#theme-three');
const btns = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const values = [];
let theme;

themeOne.addEventListener('click', () => {
  localStorage.setItem('Theme', 'theme-first');
  theme = localStorage.getItem('Theme');
  
  body.classList.add(`${theme}`);
  body.classList.remove('theme-second');
  body.classList.remove('theme-third');
  themeTwo.checked = false;
  themeThree.checked = false;
})

themeTwo.addEventListener('click', () => {
  localStorage.setItem('Theme', 'theme-second');
  theme = localStorage.getItem('Theme');
  
  body.classList.add(`${theme}`);
  body.classList.remove('theme-third');
  body.classList.remove('theme-first');
  themeThree.checked = false;
  themeOne.checked = false;
})

themeThree.addEventListener('click', () => {
  localStorage.setItem('Theme', 'theme-third');
  theme = localStorage.getItem('Theme');

  body.classList.add(`${theme}`);
  body.classList.remove('theme-first');
  body.classList.remove('theme-second');
  themeOne.checked = false;
  themeTwo.checked = false;
})

const userSelectedTheme = () => {
  if(localStorage.getItem('Theme') === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('theme-first');
    themeOne.checked = true
    themeTwo.checked = false
    themeThree.checked = false
  } else if(localStorage.getItem('Theme') === null && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('theme-second');
    themeOne.checked = false
    themeTwo.checked = true
    themeThree.checked = false
  } else {
    theme = localStorage.getItem('Theme');
    body.classList.add(`${theme}`);
  }

  switch (theme) {
    case 'theme-first':
      themeOne.checked = true
      themeTwo.checked = false
      themeThree.checked = false
      break;
    case 'theme-second':
      themeTwo.checked = true
      themeThree.checked = false
      themeOne.checked = false
      break;
    case 'theme-third':
      themeThree.checked = true
      themeOne.checked = false
      themeTwo.checked = false
      break;
    default:
  }
}

const addToScreen = (value) => {
  let answer;

  switch (value) {
    case 'DEL':
      values.pop()
      break;
    case 'RESET':
      values.splice(0, values.length)
      break;
    case 'X':
      values.splice(values.length, 0, '*')
      break;
    case '=':
      answer = eval(values.join(''))
      break;
    default:
      values.push(value)
      break;
    }

    value == '=' ? screen.textContent = answer : screen.textContent = values.join('');
}

btns.forEach((value) => {
  value.addEventListener('click', () => {
    addToScreen(value.textContent);
  })
});

document.addEventListener('load', userSelectedTheme, true);