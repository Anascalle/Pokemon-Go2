const list = []; 
const listFav = [];

window.localStorage.setItem("favoriteList", JSON.stringify(listFav));

const listContainer = document.getElementById("container");
const searchInput = document.getElementById("search-input");
const noResultsMessage = document.getElementById("no-results-message");

function getList() {
  const apiUrl = 'https://raw.githubusercontent.com/Anascalle/Pokemon-Go/main/js/data1.json';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      list.length = 0; 

      for (let i = 0; i < data.length; i++) {
        const characterData = data[i];
        const types = [];

        if (characterData.types.length > 0) {
          types.push(characterData.types[0].type.name);

          if (characterData.types.length > 1) {
            types.push(characterData.types[1].type.name);
          }
        }

        const character = new Character(characterData.id, characterData.name, characterData.sprites.other["official-artwork"].front_default, types);
        list.push(character);
      }

      renderList(list);
    })
    .catch(error => {
      console.log('Error retrieving data:', error);
    });
}

function renderList(characters) {
  listContainer.innerHTML = "";

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = character.toHtml(i);
    cardElement.addEventListener("click", () => selected(character.id));
    listContainer.appendChild(cardElement);
  }
}

function selected(id) {
  const character = list.find(item => item.id === id);
  if (character) {
    window.location.href = `./detail.html?id=${character.id}`;
  }
}

function searchCharacter() {
  const inputValue = searchInput.value.toLowerCase();
  const filteredList = list.filter(character => character.name.toLowerCase().includes(inputValue));

  if (filteredList.length > 0) {
    renderList(filteredList);
    noResultsMessage.classList.add("hidden");
  } else {
    listContainer.innerHTML = "";
    noResultsMessage.classList.remove("hidden");
  }
}

searchInput.addEventListener("input", searchCharacter);

getList();
