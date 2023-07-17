// MODO OSCURO-CLARO
const lightMode = document.getElementById('light-mode-button');
const darkMode = document.getElementById('dark-mode-button');
const body = document.querySelector('body');
const header = document.querySelector('.header-title');
const buttonsContainer = document.querySelector('.buttons-container');
const imageSectionButton = document.getElementById('image-section-button');
const textSectionButton = document.getElementById('text-section-button');
const imageAside = document.querySelector('.aside-image-section');
const urlInput = document.getElementById('url-input');
const memeImage = document.querySelector('.meme-image-container');
const inputColors = document.getElementById('color-input');
const imageColorValue = document.getElementById('image-color-value');
const textAside = document.querySelector('.aside-text-section');
const topText = document.querySelector('.top-text');
const topTextFunctionality = document.getElementById('top-text');
const textAreaTop = document.getElementById('area-top-text');
const bottomText = document.querySelector('.bottom-text');
const bottomTextFunctionality = document.getElementById('bottom-text');
const textAreaBottom = document.getElementById('area-bottom-text');
const imageBackgroundContainer = document.querySelector('.meme-color');
const blendModeSelector = document.getElementById('blend-mode-selector');
const fontSizeSection = document.getElementById('font-size');
const paddingInput = document.getElementById('padding-input');
const lineHeightInput = document.getElementById('line-height-input');
const resetButton = document.querySelector('.reset-button');

// Botones modo claro y modo oscuro
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
    urlInput.classList.remove('control-input');
    urlInput.classList.add('control-input-light');
    inputColors.classList.remove('control-input');
    inputColors.classList.add('control-input-light');
    imageBackgroundContainer.classList.remove('meme-color');
    imageBackgroundContainer.classList.add('meme-color-light');
    blendModeSelector.classList.add('control-input-light');
    blendModeSelector.classList.remove('control-input');
    textAside.classList.remove('aside-text-section');
    textAside.classList.add('aside-text-section-light');
    topText.classList.remove('top-text');
    topText.classList.add('top-text-light');
    bottomText.classList.remove('bottom-text');
    bottomText.classList.add('bottom-text-light');
    fontSelector.classList.remove('control-input');
    fontSelector.classList.add('control-input-light');
    fontSizeSection.classList.remove('control-input');
    fontSizeSection.classList.add('control-input-light');
    paddingInput.classList.remove('control-input');
    paddingInput.classList.add('control-input-light');
    lineHeightInput.classList.remove('control-input');
    lineHeightInput.classList.add('control-input-light');
    resetButton.classList.remove('reset-button');
    resetButton.classList.add('reset-button-light');
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
    urlInput.classList.remove('control-input-light');
    urlInput.classList.add('control-input');
    inputColors.classList.remove('control-input-light');
    inputColors.classList.add('control-input');
    blendModeSelector.classList.add('control-input');
    blendModeSelector.classList.remove('control-input-light');
    imageBackgroundContainer.classList.remove('meme-color-light');
    imageBackgroundContainer.classList.add('meme-color');
    textAside.classList.remove('aside-text-section-light');
    textAside.classList.add('aside-text-section');
    topText.classList.remove('top-text-light');
    topText.classList.add('top-text');
    bottomText.classList.remove('bottom-text-light');
    bottomText.classList.add('bottom-text');
    fontSelector.classList.remove('control-input-light');
    fontSelector.classList.add('control-input');
    fontSizeSection.classList.remove('control-input-light');
    fontSizeSection.classList.add('control-input');
    paddingInput.classList.remove('control-input-light');
    paddingInput.classList.add('control-input');
    lineHeightInput.classList.remove('control-input-light');
    lineHeightInput.classList.add('control-input');
    resetButton.classList.remove('reset-button-light');
    resetButton.classList.add('reset-button');
});

// IMAGEN MEME 
urlInput.addEventListener('input', () => {
 memeImage.style.backgroundImage = `url('${urlInput.value}')`;
});

// MEME TEXT
textAreaTop.addEventListener('input', () => {
    topTextFunctionality.innerHTML = `<p>${textAreaTop.value}</p>`;
});

textAreaBottom.addEventListener('input', () => {
    bottomTextFunctionality.innerHTML = `<p>${textAreaBottom.value}</p>`;
});

// COLOR DE FONDO DEL MEME 
inputColors.addEventListener('input', () => {
    memeImage.style.backgroundColor = `${inputColors.value}`;
});

// MOSTRAR-CAMBIAR ASIDES
imageSectionButton.addEventListener('click', () => {
    imageAside.style.display = 'block';
    textAside.style.display = 'none';
});

textSectionButton.addEventListener('click', () => {
    textAside.style.zIndex = '1';
    textAside.style.display = 'block';
    imageAside.style.display = 'none';
});

// ASIDE IMAGE

// Input color
inputColors.addEventListener('input', () => {
    let displayColorValue = inputColors.value.toUpperCase();
    imageColorValue.innerHTML = `<p>${displayColorValue}</p>`;
});

// Blend mode select 
const memeImageBlendMode = document.getElementById('meme-image-container');

blendModeSelector.addEventListener('change', () => {
    const selectedOption = blendModeSelector.value;
    memeImageBlendMode.style.mixBlendMode = `${selectedOption}`;
})

// ASIDE TEXTO
// Checkboxes: sin texto superior/inferior
const topTextCheckbox = document.getElementById('no-top-text');
const bottomTextCheckbox = document.getElementById('no-bottom-text');

const hideTopText = () => {
    if (topTextCheckbox.checked) {
       topTextMeme.style.visibility = 'hidden';
    } else {
       topTextMeme.style.visibility = 'visible';
    }
}

const hideBottomText = () => {
    if (bottomTextCheckbox.checked) {
        bottomTextMeme.classList.add('hidden');
    } else {
        bottomTextMeme.classList.remove('hidden')
    }
}

topTextCheckbox.addEventListener('change', () => hideTopText());
bottomTextCheckbox.addEventListener('change', () => hideBottomText());

// Select fuentes
const topTextMeme = document.getElementById('top-text');
const bottomTextMeme = document.getElementById('bottom-text');
const fontSelector = document.getElementById('font-selector');

fontSelector.addEventListener('change', () => {
    topTextMeme.style.fontFamily = `${fontSelector.value}`;
    bottomTextMeme.style.fontFamily = `${fontSelector.value}`;
});

// Color de fuente
const fontColorInput = document.getElementById('font-color');
const fontColorValue = document.getElementById('font-color-value')

fontColorInput.addEventListener('input', () => {
    topTextMeme.style.color = `${fontColorInput.value}`;
    bottomTextMeme.style.color = `${fontColorInput.value}`;
});

fontColorInput.addEventListener('input', () => {
    let displayFontColorValue = fontColorInput.value.toUpperCase();
    fontColorValue.innerHTML = `<p>${displayFontColorValue}</p>`;
});

// Color del fondo del texto
const fontBackgroundColorInput = document.getElementById('font-background-color');
const fontBackgroundColorValue = document.getElementById('font-background-color-value');

fontBackgroundColorInput.addEventListener('input', () => {
    topTextMeme.style.backgroundColor = `${fontBackgroundColorInput.value}`;
    bottomTextMeme.style.backgroundColor = `${fontBackgroundColorInput.value}`;
});

fontBackgroundColorInput.addEventListener('input', () => {
    let displayFontBackgroundColorValue = fontBackgroundColorInput.value.toUpperCase();
    fontBackgroundColorValue.innerHTML = `<p>${displayFontBackgroundColorValue}</p>`;
});

// BOTÓN DE DESCARGA
const downloadButton = document.getElementById('download-button');
const meme = document.getElementById('meme-image-container');

downloadButton.addEventListener('click', () => {
    domtoimage.toBlob(meme).then(function (blob) {
     window.saveAs(blob, 'meme.png');
 });
});