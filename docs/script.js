const body = document.querySelector('.body')
const themeOne = document.querySelector('#theme-one');
const themeTwo = document.querySelector('#theme-two');
const themeThree = document.querySelector('#theme-three');
const btns = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const values = [];
let theme;

/* The click event on the radio boxes will store the theme to the localstorage, this is because if the user revisits the app we want to set the theme to the last theme the user selected before leaving the      page, so not to make the visitor reselect it again.
  When the theme is stored in the localstorage, the body will be applying the theme stored directly from the localstorage, so that the last theme is applied, then removing other themes from the body tag.
*/
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

/* This variable function is call from the load event listener from the bottom of the code, to apply the themes based on the user system settings, if dark or light mode.
  First it checks if the user has visited the page before by checking the users localstorage to see if the user has stored any theme of his choice, if not check if the system is set to dark or light mode, then if dark mode set to the first theme, if light mode set to the second theme, else if the user has visited the app before set the theme to the last theme the user selected which is stored in the localstorage
*/
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

/* The add to screen variable function is used to display the content of the keys pressed then display them to the calculator screen
  As well check if the key pressed are Delete, Reset and equal to keys to add their own functions to them
  The inputs gotten from the keys a push to an array, so as to make use of some of the array methods, like pop to delete from when the delete key is pressed, and splice to empty the array when the reset key is pressed, then the content of the keys are push to the array as the default for the switch statement.
  This can be done with the if else statement, but just thought to make use of switch. 
*/
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

/* This is basically a for each loop to get all the keys pressed regardless of which keys are been pressed
  Then a add to screen function is called to display the content of the key pressed to the calculator screen
*/
btns.forEach((value) => {
  value.addEventListener('click', () => {
    addToScreen(value.textContent);
  })
});

document.addEventListener('load', userSelectedTheme, true);