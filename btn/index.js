const button = document.getElementById('btn');
const bdy = document.body;
btn.addEventListener('click', () => {
    button.style.backgroundColor = 'blue';
      button.style.color = 'white';
      button.style.border = '2px solid white';
      let rand = Math.floor(Math.random()*16777215).toString(16);
      bdy.style.backgroundColor = `#${rand}`;
});