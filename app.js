
const apiKey = "bd5e378503939ddaee76f12ad7a97608"; //This API KEY is public, you can change it to your API KEY if you need it.
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityElem = document.querySelector(".city");
const countryElem = document.querySelector(".country");
const tempElem = document.querySelector(".temp");
const humidityElem = document.querySelector(".humidity");
const windElem = document.querySelector(".wind");

const imagesByWeather = {
  Clouds: "clouds.png",
  Clear: "clear.png",
  Rain: "rain.png",
  Drizzle: "drizzle.png",
  Mist: "mist.png",
};

const countryCodesToNames = {
  af: "Afganistán",
  al: "Albania",
  dz: "Argelia",
  ad: "Andorra",
  ao: "Angola",
  ag: "Antigua y Barbuda",
  ar: "Argentina",
  am: "Armenia",
  au: "Australia",
  at: "Austria",
  az: "Azerbaiyán",
  bs: "Bahamas",
  bh: "Baréin",
  bd: "Bangladés",
  bb: "Barbados",
  by: "Bielorrusia",
  be: "Bélgica",
  bz: "Belice",
  bj: "Benín",
  bt: "Bután",
  bo: "Bolivia",
  ba: "Bosnia y Herzegovina",
  bw: "Botsuana",
  br: "Brasil",
  bn: "Brunéi",
  bg: "Bulgaria",
  bf: "Burkina Faso",
  bi: "Burundi",
  cv: "Cabo Verde",
  kh: "Camboya",
  cm: "Camerún",
  ca: "Canadá",
  cf: "República Centroafricana",
  td: "Chad",
  cl: "Chile",
  cn: "China",
  co: "Colombia",
  km: "Comoras",
  cg: "Congo",
  cd: "República Democrática del Congo",
  cr: "Costa Rica",
  ci: "Costa de Marfil",
  hr: "Croacia",
  cu: "Cuba",
  cy: "Chipre",
  cz: "Chequia",
  dk: "Dinamarca",
  dj: "Yibuti",
  dm: "Dominica",
  do: "República Dominicana",
  ec: "Ecuador",
  eg: "Egipto",
  sv: "El Salvador",
  gq: "Guinea Ecuatorial",
  er: "Eritrea",
  ee: "Estonia",
  et: "Etiopía",
  fj: "Fiyi",
  fi: "Finlandia",
  ga: "Gabón",
  gm: "Gambia",
  ge: "Georgia",
  gh: "Ghana",
  gr: "Grecia",
  gd: "Granada",
  gt: "Guatemala",
  gn: "Guinea",
  gw: "Guinea-Bisáu",
  gy: "Guyana",
  ht: "Haití",
  hn: "Honduras",
  hu: "Hungría",
  is: "Islandia",
  in: "India",
  id: "Indonesia",
  ir: "Irán",
  iq: "Irak",
  ie: "Irlanda",
  il: "Israel",
  it: "Italia",
  jm: "Jamaica",
  jp: "Japón",
  jo: "Jordania",
  kz: "Kazajistán",
  ke: "Kenia",
  ki: "Kiribati",
  kw: "Kuwait",
  kg: "Kirguistán",
  la: "Laos",
  lv: "Letonia",
  lb: "Líbano",
  ls: "Lesoto",
  lr: "Liberia",
  ly: "Libia",
  li: "Liechtenstein",
  lt: "Lituania",
  lu: "Luxemburgo",
  mk: "Macedonia del Norte",
  mg: "Madagascar",
  mw: "Malaui",
  my: "Malasia",
  mv: "Maldivas",
  ml: "Malí",
  mt: "Malta",
  mh: "Islas Marshall",
  mr: "Mauritania",
  mu: "Mauricio",
  mx: "México",
  fm: "Micronesia",
  md: "Moldavia",
  mc: "Mónaco",
  mn: "Mongolia",
  me: "Montenegro",
  ma: "Marruecos",
  mz: "Mozambique",
  mm: "Myanmar",
  na: "Namibia",
  nr: "Nauru",
  np: "Nepal",
  nl: "Países Bajos",
  nz: "Nueva Zelanda",
  ni: "Nicaragua",
  ne: "Níger",
  ng: "Nigeria",
  kp: "Corea del Norte",
  no: "Noruega",
  om: "Omán",
  pk: "Pakistán",
  pw: "Palaos",
  pa: "Panamá",
  pg: "Papúa Nueva Guinea",
  py: "Paraguay",
  pe: "Perú",
  ph: "Filipinas",
  pl: "Polonia",
  pt: "Portugal",
  qa: "Catar",
  ro: "Rumania",
  ru: "Rusia",
  rw: "Ruanda",
  kn: "San Cristóbal y Nieves",
  lc: "Santa Lucía",
  vc: "San Vicente y las Granadinas",
  ws: "Samoa",
  sm: "San Marino",
  st: "Santo Tomé y Príncipe",
  sa: "Arabia Saudita",
  sn: "Senegal",
  rs: "Serbia",
  sc: "Seychelles",
  sl: "Sierra Leona",
  sg: "Singapur",
  sk: "Eslovaquia",
  si: "Eslovenia",
  sb: "Islas Salomón",
  so: "Somalia",
  za: "Sudáfrica",
  kr: "Corea del Sur",
  ss: "Sudán del Sur",
  es: "España",
  lk: "Sri Lanka",
  sd: "Sudán",
  sr: "Surinam",
  se: "Suecia",
  ch: "Suiza",
  sy: "Siria",
  tj: "Tayikistán",
  tz: "Tanzania",
  th: "Tailandia",
  tl: "Timor Oriental",
  tg: "Togo",
  to: "Tonga",
  tt: "Trinidad y Tobago",
  tn: "Túnez",
  tr: "Turquía",
  tm: "Turkmenistán",
  tv: "Tuvalu",
  ug: "Uganda",
  ua: "Ucrania",
  ae: "Emiratos Árabes Unidos",
  gb: "Reino Unido",
  uy: "Uruguay",
  uz: "Uzbekistán",
  vu: "Vanuatu",
  va: "Ciudad del Vaticano",
  ve: "Venezuela",
  vn: "Vietnam",
  ye: "Yemen",
  zm: "Zambia",
  zw: "Zimbabue",
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchInput.value);
  }
});

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();

    cityElem.textContent = data.name;
    countryElem.textContent = data.sys.country;
    tempElem.textContent = `${Math.round(data.main.temp)}°C`;
    humidityElem.textContent = `${data.main.humidity}%`;
    windElem.textContent = `${data.wind.speed}km/h`;

    const weatherMain = data.weather[0].main;
    weatherIcon.src = `imagenes/${
      imagesByWeather[weatherMain] || "default.png"
    }`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

const resultsElem = document.getElementById("autocomplete-results");
let filteredResults = [];
let activeIndex = 0;

searchInput.addEventListener("input", autocomplete);
resultsElem.addEventListener("click", handleResultClick);
searchInput.addEventListener("keyup", handleResultKeyDown);

function autocomplete() {
  const value = searchInput.value.trim();
  if (!value) {
    hideResults();
    return;
  }
  fetchCities(value)
    .then((data) => {
      filteredResults = [...new Set(data)]; // Remove duplicates
      showAutocompleteResults();
    })
    .catch((error) => {
      console.error("Error in autocomplete:", error);
      hideResults();
    });
}

function fetchCities(query) {
  const autocompleteApiUrl = `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${apiKey}`;
  return fetch(autocompleteApiUrl)
    .then((response) => response.json())
    .then((data) =>
      data.list.map((city) => ({
        name: city.name,
        region:
          countryCodesToNames[city.sys.country.toLowerCase()] ||
          city.sys.country,
      }))
    )
    .then((cities) => {
      // Remove duplicates from the fetched cities
      return cities.filter(
        (city, index, self) =>
          index ===
          self.findIndex(
            (c) => c.name === city.name && c.region === city.region
          )
      );
    })
    .catch((error) => {
      console.error("Error fetching cities:", error);
      return [];
    });
}

function showAutocompleteResults() {
  resultsElem.innerHTML = "";
  filteredResults.forEach((result, index) => {
    const li = document.createElement("li");
    li.id = `autocomplete-result-${index}`;
    li.className = `autocomplete-result${
      index === activeIndex ? " selected" : ""
    }`;
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", index === activeIndex ? "true" : "false");
    li.textContent = `${result.name}, ${result.region}`;
    resultsElem.appendChild(li);
  });

  if (filteredResults.length > 0) {
    resultsElem.classList.remove("hidden");
  } else {
    hideResults();
  }
}

function handleResultClick(event) {
  const selectedResult = event.target.closest("li");
  if (selectedResult) {
    selectItem(selectedResult);
  }
}

function handleResultKeyDown(event) {
  const { key } = event;
  switch (key) {
    case "Backspace":
      return;
    case "Escape":
      hideResults();
      return;
    case "ArrowUp":
      event.preventDefault();
      activeIndex =
        (activeIndex - 1 + filteredResults.length) % filteredResults.length;
      showAutocompleteResults();
      break;
    case "ArrowDown":
      event.preventDefault();
      activeIndex = (activeIndex + 1) % filteredResults.length;
      showAutocompleteResults();
      break;
    case "Enter":
      const selectedResult = getItemAt(activeIndex);
      if (selectedResult) {
        selectItem(selectedResult);
      }
      break;
    default:
      autocomplete();
  }
}

function selectItem(node) {
  searchInput.value = node.textContent;
  hideResults();
  checkWeather(node.textContent);
}

function hideResults() {
  resultsElem.innerHTML = "";
  resultsElem.classList.add("hidden");
}

function getItemAt(index) {
  return resultsElem.querySelector(`#autocomplete-result-${index}`);
}

const locationButton = document.getElementById("location-button");

locationButton.addEventListener("click", async () => {
  // Verificar si el navegador soporta geolocalización
  if ("geolocation" in navigator) {
    try {
      // Obtener la posición actual del usuario
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Hacer una solicitud a servicios de geocoding inverso (puede no ser preciso)
      const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      // Obtener la información de ubicación
      const city = data.address.city || data.address.town;
      const region = data.address.state || data.address.region;
      const country = data.address.country;

      // Mostrar la información en la card
      checkWeather(city);
      searchInput.value = city;
    } catch (error) {
      console.error("Error al obtener la información de ubicación:", error);
    }
  } else {
    alert("La geolocalización no está disponible en este navegador.");
  }
});

setInterval(checkWeather(city), 1000);

window.addEventListener("DOMContentLoaded", init);
