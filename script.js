const lightMode = document.getElementById("light-mode-button");
const darkMode = document.getElementById("dark-mode-button");
const body = document.querySelector("body");
const header = document.querySelector(".header-title");
const buttonsContainer = document.querySelector(".buttons-container");
const imageSectionButton = document.getElementById("image-section-button");
const textSectionButton = document.getElementById("text-section-button");
const imageAside = document.querySelector(".aside-image-section");
const urlInput = document.getElementById("url-input");
const meme = document.getElementById("meme-container");
const memeImage = document.getElementById("meme-image");
const inputColors = document.getElementById("color-input");
const imageColorValue = document.getElementById("image-color-value");
const textAside = document.querySelector(".aside-text-section");
const topTextFunctionality = document.getElementById("top-text-meme");
const textAreaTop = document.getElementById("top-text-area");
const bottomTextFunctionality = document.getElementById("bottom-text-meme");
const textAreaBottom = document.getElementById("bottom-text-area");
const imageBackgroundContainer = document.querySelector(".meme-color");
const blendModeSelector = document.getElementById("blend-mode-selector");
const fontColorContainer = document.getElementById("text-color");
const fontColor = document.getElementById("font-color");
const fontBackgroundColorContainer = document.getElementById(
  "text-background-color"
);
const fontBackgroundColor = document.getElementById("font-background-color");
const fontSizeInput = document.getElementById("font-size");
const alignLeft = document.getElementById("text-align-left-button");
const alignCenter = document.getElementById("text-align-center-button");
const alignRight = document.getElementById("text-align-right-button");
const noOutline = document.getElementById("no-outline-button");
const lightOutline = document.getElementById("light-outline-button");
const darkOutline = document.getElementById("dark-outline-button");
const paddingInput = document.getElementById("padding-input");
const lineHeightSelector = document.getElementById("line-height-selector");
const resetButton = document.getElementById("reset-button");

// MODO OSCURO-CLARO
// Botones modo claro y modo oscuro
lightMode.addEventListener("click", () => {
  lightMode.style.display = "none";
  darkMode.style.display = "block";
  body.style.backgroundColor = "#ddb892";
  header.classList.remove("header-title");
  header.classList.add("header-title-light");
  buttonsContainer.classList.remove("buttons-container");
  buttonsContainer.classList.add("buttons-container-light");
  imageAside.classList.remove("aside-image-section");
  imageAside.classList.add("aside-image-section-light");
  urlInput.classList.remove("control-input");
  urlInput.classList.add("control-input-light");
  inputColors.classList.remove("control-input");
  inputColors.classList.add("control-input-light");
  imageBackgroundContainer.classList.remove("meme-color");
  imageBackgroundContainer.classList.add("meme-color-light");
  blendModeSelector.classList.add("control-input-light");
  blendModeSelector.classList.remove("control-input");
  textAside.classList.remove("aside-text-section");
  textAside.classList.add("aside-text-section-light");
  topText.classList.remove("top-text");
  topText.classList.add("top-text-light");
  bottomText.classList.remove("bottom-text");
  bottomText.classList.add("bottom-text-light");
  fontSelector.classList.remove("control-input");
  fontSelector.classList.add("control-input-light");
  fontSizeInput.classList.remove("control-input");
  fontSizeInput.classList.add("control-input-light");
  alignLeft.classList.remove("control-input");
  alignLeft.classList.add("control-input-light");
  alignCenter.classList.remove("control-input");
  alignCenter.classList.add("control-input-light");
  alignRight.classList.remove("control-input");
  alignRight.classList.add("control-input-light");
  fontColorContainer.classList.remove("text-color");
  fontColorContainer.classList.add("text-color-light");
  fontColor.classList.remove("text-color");
  fontColor.classList.add("text-color-light");
  fontBackgroundColorContainer.classList.remove("text-color");
  fontBackgroundColorContainer.classList.add("text-color-light");
  fontBackgroundColor.classList.remove("text-color");
  fontBackgroundColor.classList.add("text-color-light");
  noOutline.classList.remove("control-input");
  noOutline.classList.add("control-input-light");
  lightOutline.classList.remove("control-input");
  lightOutline.classList.add("control-input-light");
  darkOutline.classList.remove("control-input");
  darkOutline.classList.add("control-input-light");
  paddingInput.classList.remove("control-input");
  paddingInput.classList.add("control-input-light");
  lineHeightSelector.classList.remove("control-input");
  lineHeightSelector.classList.add("control-input-light");
  resetButton.classList.remove("reset-button");
  resetButton.classList.add("reset-button-light");
});

darkMode.addEventListener("click", () => {
  darkMode.style.display = "none";
  lightMode.style.display = "block";
  body.style.backgroundColor = "#30343f";
  header.classList.remove("header-title-light");
  header.classList.add("header-title");
  buttonsContainer.classList.remove("buttons-container-light");
  buttonsContainer.classList.add("buttons-container");
  imageAside.classList.remove("aside-image-section-light");
  imageAside.classList.add("aside-image-section");
  urlInput.classList.remove("control-input-light");
  urlInput.classList.add("control-input");
  inputColors.classList.remove("control-input-light");
  inputColors.classList.add("control-input");
  blendModeSelector.classList.add("control-input");
  blendModeSelector.classList.remove("control-input-light");
  imageBackgroundContainer.classList.remove("meme-color-light");
  imageBackgroundContainer.classList.add("meme-color");
  textAside.classList.remove("aside-text-section-light");
  textAside.classList.add("aside-text-section");
  topText.classList.remove("top-text-light");
  topText.classList.add("top-text");
  bottomText.classList.remove("bottom-text-light");
  bottomText.classList.add("bottom-text");
  fontSelector.classList.remove("control-input-light");
  fontSelector.classList.add("control-input");
  fontSizeInput.classList.remove("control-input-light");
  fontSizeInput.classList.add("control-input");
  alignLeft.classList.remove("control-input-light");
  alignLeft.classList.add("control-input");
  alignCenter.classList.remove("control-input-light");
  alignCenter.classList.add("control-input");
  alignRight.classList.remove("control-input-light");
  alignRight.classList.add("control-input");
  fontColorContainer.classList.remove("text-color-light");
  fontColorContainer.classList.add("text-color");
  fontColor.classList.remove("text-color-light");
  fontColor.classList.add("text-color");
  fontBackgroundColorContainer.classList.remove("text-color-light");
  fontBackgroundColorContainer.classList.add("text-color");
  fontBackgroundColor.classList.remove("text-color-light");
  fontBackgroundColor.classList.add("text-color");
  noOutline.classList.remove("control-input-light");
  noOutline.classList.add("control-input");
  lightOutline.classList.remove("control-input-light");
  lightOutline.classList.add("control-input");
  darkOutline.classList.remove("control-input-light");
  darkOutline.classList.add("control-input");
  paddingInput.classList.remove("control-input-light");
  paddingInput.classList.add("control-input");
  lineHeightSelector.classList.remove("control-input-light");
  lineHeightSelector.classList.add("control-input");
  resetButton.classList.remove("reset-button-light");
  resetButton.classList.add("reset-button");
});

// IMAGEN MEME
urlInput.addEventListener("input", () => {
  meme.style.backgroundImage = `url('${urlInput.value}')`;
});

// MEME TEXT
textAreaTop.addEventListener("input", () => {
  topTextFunctionality.innerHTML = `<p>${textAreaTop.value}</p>`;
});

textAreaBottom.addEventListener("input", () => {
  bottomTextFunctionality.innerHTML = `<p>${textAreaBottom.value}</p>`;
});

// MOSTRAR-CAMBIAR ASIDES
imageSectionButton.addEventListener("click", () => {
  imageAside.style.display = "block";
  textAside.style.display = "none";
});

textSectionButton.addEventListener("click", () => {
  textAside.style.zIndex = "1";
  textAside.style.display = "block";
  imageAside.style.display = "none";
});

// ASIDE IMAGE
// COLOR DE FONDO DEL MEME
inputColors.addEventListener("input", () => {
  meme.style.backgroundColor = `${inputColors.value}`;
});

// Mostrar el valor del input color
inputColors.addEventListener("input", () => {
  let displayColorValue = inputColors.value.toUpperCase();
  imageColorValue.innerHTML = `<p>${displayColorValue}</p>`;
});

// Blend mode select
blendModeSelector.addEventListener("change", () => {
  const selectedOption = blendModeSelector.value;
  meme.style.backgroundBlendMode = `${selectedOption}`;
});
// no pude lograr que los filtros se apliquen solo a la imagen, me rindo

// Filtros
const brightnessInput = document.getElementById("brightness-input");
const opacityInput = document.getElementById("opacity-input");
const contrastInput = document.getElementById("contrast-input");
const blurInput = document.getElementById("blur-input");
const grayscaleInput = document.getElementById("grayscale-input");
const sepiaInput = document.getElementById("sepia-input");
const hueRotationInput = document.getElementById("hue-rotation-input");
const saturationInput = document.getElementById("saturation-input");
const invertInput = document.getElementById("invert-input");

const applyFilters = () => {
  // obtengo los valores
  const brightnessValue = brightnessInput.value;
  const opacityValue = opacityInput.value;
  const contrastValue = contrastInput.value;
  const blurValue = blurInput.value;
  const grayscaleValue = grayscaleInput.value;
  const sepiaValue = sepiaInput.value;
  const hueRotationValue = hueRotationInput.value;
  const saturationValue = saturationInput.value;
  const invertValue = invertInput.value;

  // le aplico los filtros al elemento
  meme.style.filter = `
    brightness(${brightnessValue})
    opacity(${opacityValue})
    contrast(${contrastValue}%)
    blur(${blurValue}px)
    grayscale(${grayscaleValue}%)
    sepia(${sepiaValue}%)
    hue-rotate(${hueRotationValue}deg)
    saturate(${saturationValue}%)
    invert(${invertValue})
  `;
};

// los event listeners para cada input range
brightnessInput.addEventListener("input", () => applyFilters());
opacityInput.addEventListener("input", () => applyFilters());
contrastInput.addEventListener("input", () => applyFilters());
blurInput.addEventListener("input", () => applyFilters());
grayscaleInput.addEventListener("input", () => applyFilters());
sepiaInput.addEventListener("input", () => applyFilters());
hueRotationInput.addEventListener("input", () => applyFilters());
saturationInput.addEventListener("input", () => applyFilters());
invertInput.addEventListener("input", () => applyFilters());

// Botón RESET

const resetFilters = () => {
  // reseteo el valor de los filtros al default
  brightnessInput.value = 1;
  opacityInput.value = 1;
  contrastInput.value = 100;
  blurInput.value = 0;
  grayscaleInput.value = 0;
  sepiaInput.value = 0;
  hueRotationInput.value = 0;
  saturationInput.value = 100;
  invertInput.value = 0;

  // llamo a la función applyFilters para que vuelvan al valor inicial
  applyFilters();
};

resetButton.addEventListener("click", () => resetFilters());

// ASIDE TEXTO
// Checkboxes: sin texto superior/inferior
const topTextCheckbox = document.getElementById("no-top-text");
const bottomTextCheckbox = document.getElementById("no-bottom-text");

const hideTopText = () => {
  if (topTextCheckbox.checked) {
    topText.style.visibility = "hidden";
  } else {
    topText.style.visibility = "visible";
  }
};

const hideBottomText = () => {
  if (bottomTextCheckbox.checked) {
    bottomText.style.visibility = "hidden";
  } else {
    bottomText.style.visibility = "visible";
  }
};

topTextCheckbox.addEventListener("change", () => hideTopText());
bottomTextCheckbox.addEventListener("change", () => hideBottomText());

// Select fuentes
const topText = document.getElementById("top-text-meme");
const bottomText = document.getElementById("bottom-text-meme");
const fontSelector = document.getElementById("font-selector");

fontSelector.addEventListener("change", () => {
  topText.style.fontFamily = `${fontSelector.value}`;
  bottomText.style.fontFamily = `${fontSelector.value}`;
});

// Input tamaño de fuente
fontSizeInput.addEventListener("input", () => {
  const newFontSize = `${fontSizeInput.value}` + `px`;
  topText.style.fontSize = newFontSize;
  topText.style.padding = newFontSize;
  bottomText.style.fontSize = newFontSize;
  bottomText.style.padding = newFontSize;
});

// Botones alineación del texto
alignLeft.addEventListener("click", () => {
  topText.style.textAlign = "left";
  bottomText.style.textAlign = "left";
});

alignCenter.addEventListener("click", () => {
  topText.style.textAlign = "center";
  bottomText.style.textAlign = "center";
});

alignRight.addEventListener("click", () => {
  topText.style.textAlign = "right";
  bottomText.style.textAlign = "right";
});

// Color de fuente
const fontColorInput = document.getElementById("font-color");
const fontColorValue = document.getElementById("font-color-value");

fontColorInput.addEventListener("input", () => {
  topText.style.color = `${fontColorInput.value}`;
  bottomText.style.color = `${fontColorInput.value}`;
});

fontColorInput.addEventListener("input", () => {
  let displayFontColorValue = fontColorInput.value.toUpperCase();
  fontColorValue.innerHTML = `<p>${displayFontColorValue}</p>`;
});

// Color del fondo del texto
const fontBackgroundColorInput = document.getElementById(
  "font-background-color"
);
const fontBackgroundColorValue = document.getElementById(
  "font-background-color-value"
);

fontBackgroundColorInput.addEventListener("input", () => {
  topText.style.backgroundColor = `${fontBackgroundColorInput.value}`;
  bottomText.style.backgroundColor = `${fontBackgroundColorInput.value}`;
});

fontBackgroundColorInput.addEventListener("input", () => {
  let displayFontBackgroundColorValue =
    fontBackgroundColorInput.value.toUpperCase();
  fontBackgroundColorValue.innerHTML = `<p>${displayFontBackgroundColorValue}</p>`;
});

// Checkbox fondo transparente
const transparentBackground = document.getElementById("transparent-background");

const makeBottomBackgroundTransparent = () => {
  if (transparentBackground.checked) {
    bottomText.style.backgroundColor = "transparent";
  } else {
    bottomText.style.backgroundColor = "#fff";
  }
};

const makeTopBackgroundTransparent = () => {
  if (transparentBackground.checked) {
    topText.style.backgroundColor = "transparent";
  } else {
    topText.style.backgroundColor = "#fff";
  }
};

transparentBackground.addEventListener("change", () =>
  makeBottomBackgroundTransparent()
);
transparentBackground.addEventListener("change", () =>
  makeTopBackgroundTransparent()
);

// Contorno del texto
noOutline.addEventListener("click", () => {
  topText.style.textShadow = "none";
  bottomText.style.textShadow = "none";
});

lightOutline.addEventListener("click", () => {
  topText.style.textShadow =
    "2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff, 0px -2px 0 #fff";
  bottomText.style.textShadow =
    "2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff, 0px -2px 0 #fff";
});

darkOutline.addEventListener("click", () => {
  topText.style.textShadow =
    "2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";
  bottomText.style.textShadow =
    "2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";
});

// Input Padding
paddingInput.addEventListener("input", () => {
  let paddingValue = paddingInput.value;
  topText.style.padding = `${paddingValue}` + `px`;
  bottomText.style.padding = `${paddingValue}` + `px`;
});

// Input Interlineado
lineHeightSelector.addEventListener("input", () => {
  console.log(lineHeightSelector.value);
  let lineHeightValue = lineHeightSelector.value;
  topText.style.lineHeight = `${lineHeightValue}` + `px`;
  bottomText.style.lineHeight = `${lineHeightValue}` + `px`;
});

// BOTÓN DE DESCARGA
const downloadButton = document.getElementById("download-button");

downloadButton.addEventListener("click", () => {
  domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "meme.png");
  });
});
