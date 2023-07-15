// MODO OSCURO-CLARO
const lightMode = document.getElementById('light-mode-button');
const darkMode = document.getElementById('dark-mode-button');
const body = document.querySelector('body');
const header = document.querySelector('.header-title');
const buttonsContainer = document.querySelector('.buttons-container');
const imageAside = document.querySelector('.aside-image-section');
const textAside = document.querySelector('.aside-text-section');

// Botones
lightMode.addEventListener('click', () => {
    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
    body.style.backgroundColor = '#ddb892';
    header.classList.remove('header-title');
    header.classList.add('header-title-light');
    buttonsContainer.classList.remove('buttons-container');
    buttonsContainer.classList.add('buttons-container-light');
    imageAside.classList.remove('aside-image-section');
    imageAside.classList.add('aside-image-section-light');
    textAside.classList.remove('aside-text-section');
    textAside.classList.add('aside-text-section-light');
});

darkMode.addEventListener('click', () => {
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
    body.style.backgroundColor = '#30343f';
    header.classList.remove('header-title-light');
    header.classList.add('header-title');
    buttonsContainer.classList.remove('buttons-container-light');
    buttonsContainer.classList.add('buttons-container');
    imageAside.classList.remove('aside-image-section-light');
    imageAside.classList.add('aside-image-section');
    textAside.classList.remove('aside-text-section-light');
    textAside.classList.add('aside-text-section');

});

// IMAGEN MEME 
const urlInput = document.getElementById('url-input');
const memeImage = document.querySelector('.meme-image-container');

urlInput.addEventListener('input', () => changeMemeImage());

const changeMemeImage = () => {
    memeImage.style.backgroundImage = `url('${urlInput.value}')`;
}

// MEME TEXT
const topText = document.getElementById('top-text');
const textAreaTop = document.getElementById('area-top-text');
const bottomText = document.getElementById('bottom-text');
const textAreaBottom = document.getElementById('area-bottom-text');

textAreaTop.addEventListener('input', () => {
    topText.innerHTML = `<p>${textAreaTop.value}</p>`;
});

textAreaBottom.addEventListener('input', () => {
    bottomText.innerHTML = `<p>${textAreaBottom.value}</p>`;
});

// const changeTopText = () => {
//     topText.innerHTML = `${textAreaTop.value}`;
//    }
   
// textAreaTop.addEventListener('input', () => changeTopText());

// COLOR DE FONDO DEL MEME 
const inputColors = document.getElementById('color-input');
const imageColorValue = document.getElementById('image-color-value');

inputColors.addEventListener('input', () => {
    console.log(inputColors.value);
    memeImage.style.backgroundColor = `${inputColors.value}`;
});

// MOSTRAR-CAMBIAR ASIDES
const imageSectionButton = document.getElementById('image-section-button');
const textSectionButton = document.getElementById('text-section-button');

imageSectionButton.addEventListener('click', () => {
    imageAside.style.display = 'block';
    textAside.style.display = 'none';
});

textSectionButton.addEventListener('click', () => {
    textAside.style.zIndex = '1';
    textAside.style.display = 'block';
    imageAside.style.display = 'none';
});

// ASIDES