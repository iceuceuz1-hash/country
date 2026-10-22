// Local o'zgaruvchan bayroqlar va davlatlar ro'yxati (Data array)
const countriesData = [
  {
    name: "Germany",
    flag: "https://flagcdn.com/w320/de.png", 
    population: "81,770,900",
    region: "Europe",
    capital: "Berlin"
  },
  {
    name: "United States of America",
    flag: "https://flagcdn.com/w320/us.png", 
    population: "323,947,000",
    region: "Americas",
    capital: "Washington, D.C."
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png", 
    population: "206,135,893",
    region: "Americas",
    capital: "Brasília"
  },
  {
    name: "Iceland",
    flag: "https://flagcdn.com/w320/is.png", 
    population: "334,300",
    region: "Europe",
    capital: "Reykjavík"
  },
  {
    name: "Afghanistan",
    flag: "https://flagcdn.com/w320/af.png", 
    population: "27,657,145",
    region: "Asia",
    capital: "Kabul"
  },
  {
    name: "Åland Islands",
    flag: "https://flagcdn.com/w320/ax.png", 
    population: "28,875",
    region: "Europe",
    capital: "Mariehamn"
  },
  {
    name: "Albania",
    flag: "https://flagcdn.com/w320/al.png", 
    population: "2,886,026",
    region: "Europe",
    capital: "Tirana"
  },
  {
    name: "Algeria",
    flag: "https://flagcdn.com/w320/dz.png", 
    population: "40,400,000",
    region: "Africa",
    capital: "Algiers"
  }
];


const countriesContainer = document.getElementById("countriesContainer");
const searchInput = document.getElementById("searchInput");
const regionSelect = document.getElementById("regionSelect");
const darkModeBtn = document.getElementById("darkModeBtn");


function renderCountries(data) {
  countriesContainer.innerHTML = "";

  if (data.length === 0) {
    countriesContainer.innerHTML = "<p>Hech qanday davlat topilmadi...</p>";
    return;
  }

  data.forEach((country) => {
    const card = document.createElement("article");
    card.classList.add("country-card");

    card.innerHTML = `
      <img src="${country.flag}" alt="${country.name} bayrog'i" class="country-card__flag">
      <div class="country-card__body">
        <h2 class="country-card__title">${country.name}</h2>
        <ul class="country-card__info">
          <li><strong>Population:</strong> ${country.population}</li>
          <li><strong>Region:</strong> ${country.region}</li>
          <li><strong>Capital:</strong> ${country.capital}</li>
        </ul>
      </div>
    `;

    countriesContainer.appendChild(card);
  });
}


function filterData() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedRegion = regionSelect.value;

  const filtered = countriesData.filter((country) => {
   
    const matchesSearch = country.name.toLowerCase().startsWith(searchValue) ||
                          country.name.toLowerCase().includes(searchValue);
    
    
    const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  renderCountries(filtered);
}


searchInput.addEventListener("input", filterData);
regionSelect.addEventListener("change", filterData);


darkModeBtn.addEventListener("click", () => {
  document.body.classList-toggle("dark-theme");
});


renderCountries(countriesData);