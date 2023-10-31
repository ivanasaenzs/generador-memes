const $ = (selector) => document.querySelector(selector);

// MODO OSCURO-CLARO
$("#light-theme-button").addEventListener("click", () => {
  const currentTheme = $("body").getAttribute("data-theme");
  if (currentTheme === "light-theme") {
    $("body").removeAttribute("data-theme");
    $(
      "#light-theme-button"
    ).innerHTML = `<i class="far fa-lightbulb lightbulb-on"></i> Modo claro`;
  } else {
    $("body").setAttribute("data-theme", "light-theme");
    $(
      "#light-theme-button"
    ).innerHTML = `<i class="fas fa-lightbulb lightbulb-off"></i> Modo oscuro`;
  }
});

// IMAGEN MEME
$("#url-input").addEventListener("input", () => {
  $("#meme-image").style.backgroundImage = `url('${$("#url-input").value}')`;
});

// MEME TEXT
$("#top-text-area").addEventListener("input", () => {
  $("#top-text-meme").innerHTML = `<p>${$("#top-text-area").value}</p>`;
});

$("#bottom-text-area").addEventListener("input", () => {
  $("#bottom-text-meme").innerHTML = `<p>${$("#bottom-text-area").value}</p>`;
});

// MOSTRAR-CAMBIAR ASIDES
$("#image-section-button").addEventListener("click", () => {
  $(".aside-image-section").style.display = "block";
  $(".aside-text-section").style.display = "none";
});

$("#text-section-button").addEventListener("click", () => {
  $(".aside-text-section").style.zIndex = "1";
  $(".aside-text-section").style.display = "block";
  $(".aside-image-section").style.display = "none";
});

// ASIDE IMAGE
// COLOR DE FONDO DEL MEME
$("#color-input").addEventListener("input", () => {
  $("#meme-container").style.backgroundColor = `${$("#color-input").value}`;
});

// CERRAR ASIDES
$("#close-text-section").addEventListener("click", () => {
  $("#aside-text-section").style.display = "none";
  $("#aside-image-section").style.display = "none";
});

$("#close-image-section").addEventListener("click", () => {
  $("#aside-image-section").style.display = "none";
  $("#aside-text-section").style.display = "none";
});

// Mostrar el valor del input color
$("#color-input").addEventListener("input", () => {
  let displayColorValue = $("#color-input").value.toUpperCase();
  $("#image-color-value").innerHTML = `<p>${displayColorValue}</p>`;
});

// Blend mode select
$("#mix-blend-mode").addEventListener("change", () => {
  const selectedOption = $("#mix-blend-mode").value;
  $("#meme-image").style.mixBlendMode = selectedOption;
});

// Filtros
const applyFilters = () => {
  // obtengo los valores
  const brightnessValue = $("#brightness-input").value;
  const opacityValue = $("#opacity-input").value;
  const contrastValue = $("#contrast-input").value;
  const blurValue = $("#blur-input").value;
  const grayscaleValue = $("#grayscale-input").value;
  const sepiaValue = $("#sepia-input").value;
  const hueRotationValue = $("#hue-rotation-input").value;
  const saturationValue = $("#saturation-input").value;
  const invertValue = $("#invert-input").value;

  // le aplico los filtros al elemento
  $("#meme-image").style.filter = `
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
$("#brightness-input").addEventListener("input", applyFilters);
$("#opacity-input").addEventListener("input", applyFilters);
$("#contrast-input").addEventListener("input", applyFilters);
$("#blur-input").addEventListener("input", applyFilters);
$("#grayscale-input").addEventListener("input", applyFilters);
$("#sepia-input").addEventListener("input", applyFilters);
$("#hue-rotation-input").addEventListener("input", applyFilters);
$("#saturation-input").addEventListener("input", applyFilters);
$("#invert-input").addEventListener("input", applyFilters);

// Botón RESET
$("#reset-button").addEventListener("click", () => {
  $("#brightness-input").value = "1";
  $("#opacity-input").value = "1";
  $("#contrast-input").value = "100";
  $("#blur-input").value = "0";
  $("#grayscale-input").value = "0";
  $("#sepia-input").value = "0";
  $("#hue-rotation-input").value = "0";
  $("#saturation-input").value = "100";
  $("#invert-input").value = "0";
  $("#meme-image").style.filter = "none";
});

// ASIDE TEXTO
// Checkboxes: sin texto superior/inferior
const hideTopText = () => {
  const isChecked = $("#no-top-text").checked;
  $("#top-text-meme").style.visibility = isChecked ? "hidden" : "visible";
};

const hideBottomText = () => {
  const isChecked = $("#no-bottom-text").checked;
  $("#bottom-text-meme").style.visibility = isChecked ? "hidden" : "visible";
};

$("#no-top-text").addEventListener("change", () => hideTopText());
$("#no-bottom-text").addEventListener("change", () => hideBottomText());

// Select fuentes
$("#font-selector").addEventListener("change", () => {
  $("#top-text-meme").style.fontFamily = `${$("#font-selector").value}`;
  $("#bottom-text-meme").style.fontFamily = `${$("#font-selector").value}`;
});

// Input tamaño de fuente
$("#font-size").addEventListener("input", () => {
  const newFontSize = `${$("#font-size").value}` + `px`;
  $("#top-text-meme").style.fontSize = newFontSize;
  $("#top-text-meme").style.padding = newFontSize;
  $("#bottom-text-meme").style.fontSize = newFontSize;
  $("#bottom-text-meme").style.padding = newFontSize;
});

// Botones alineación del texto
$("#text-align-left-button").addEventListener("click", () => {
  $("#top-text-meme").style.textAlign = "left";
  $("#bottom-text-meme").style.textAlign = "left";
});

$("#text-align-center-button").addEventListener("click", () => {
  $("#top-text-meme").style.textAlign = "center";
  $("#bottom-text-meme").style.textAlign = "center";
});

$("#text-align-right-button").addEventListener("click", () => {
  $("#top-text-meme").style.textAlign = "right";
  $("#bottom-text-meme").style.textAlign = "right";
});

// Color de fuente
$("#font-color").addEventListener("input", () => {
  $("#top-text-meme").style.color = `${$("#font-color").value}`;
  $("#bottom-text-meme").style.color = `${$("#font-color").value}`;
});

$("#font-color").addEventListener("input", () => {
  let displayFontColorValue = $("#font-color").value.toUpperCase();
  $("#font-color-value").innerHTML = `<p>${displayFontColorValue}</p>`;
});

// Color del fondo del texto
$("#font-background-color-input").addEventListener("input", () => {
  $("#top-text-meme").style.backgroundColor = `${
    $("#font-background-color-input").value
  }`;
  $("#bottom-text-meme").style.backgroundColor = `${
    $("#font-background-color-input").value
  }`;
});

$("#font-background-color-input").addEventListener("input", () => {
  let displayFontBackgroundColorValue = $(
    "#font-background-color-input"
  ).value.toUpperCase();
  $(
    "#font-background-color-value"
  ).innerHTML = `<p>${displayFontBackgroundColorValue}</p>`;
});

// Checkbox fondo transparente
const makeBackgroundTransparent = () => {
  const isChecked = $("#transparent-background").checked;
  $("#bottom-text-meme").style.backgroundColor = isChecked
    ? "transparent"
    : "#fff";
  $("#top-text-meme").style.backgroundColor = isChecked
    ? "transparent"
    : "#fff";
};

$("#transparent-background").addEventListener("change", () =>
  makeBackgroundTransparent()
);

// Contorno del texto
$("#no-outline-button").addEventListener("click", () => {
  $("#top-text-meme").style.textShadow = "none";
  $("#bottom-text-meme").style.textShadow = "none";
  console.log($("#no-outline-button"));
});

$("#light-outline-button").addEventListener("click", () => {
  $("#top-text-meme").style.textShadow =
    "2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff, 0px -2px 0 #fff";
  $("#bottom-text-meme").style.textShadow =
    "2px 2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, -2px -2px 0 #fff, 2px 0px 0 #fff, 0px 2px 0 #fff, -2px 0px 0 #fff, 0px -2px 0 #fff";
});

$("#dark-outline-button").addEventListener("click", () => {
  $("#top-text-meme").style.textShadow =
    "2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";
  $("#bottom-text-meme").style.textShadow =
    "2px 2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, -2px -2px 0 #000, 2px 0px 0 #000, 0px 2px 0 #000, -2px 0px 0 #000, 0px -2px 0 #000";
});

// Input Padding
$("#padding-input").addEventListener("input", () => {
  let paddingValue = $("#padding-input").value;
  $("#top-text-meme").style.padding = `${paddingValue}` + `px`;
  $("#bottom-text-meme").style.padding = `${paddingValue}` + `px`;
});

// Input Interlineado
$("#line-height-selector").addEventListener("change", () => {
  let lineHeightValue = $("#line-height-selector").value;
  console.log(lineHeightValue);
  $("#top-text-meme").style.lineHeight = `${lineHeightValue}px`;
  $("#bottom-text-meme").style.lineHeight = `${lineHeightValue}px`;
});

// BOTÓN DE DESCARGA
$("#download-button").addEventListener("click", () => {
  domtoimage.toBlob($("#meme-container")).then(function (blob) {
    window.saveAs(blob, "meme.png");
  });
});
