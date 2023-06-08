const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function getCharacter() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Anascalle/Pokemon-Go/main/js/data1.json');
    const data = await response.json();

    const character = searchById(data, id);

    if (!character) {
      console.log('Personaje no encontrado');
      return;
    }

    const type1 = character.types[0].type.name;
    const type2 = character.types[1] ? character.types[1].type.name : null;
    const abilities = character.abilities.map(ability => ability.ability.name);
    const moves = character.moves.map(move => move.move.name);

    const types = type2 ? [type1, type2] : [type1];

    const characterObject = new Character(
      character.id,
      character.name,
      character.sprites.other["official-artwork"].front_default,
      types,
      character.weight,
      character.height,
      abilities,
      character.base_experience,
      character.stats,
      moves
    );

    console.log('before favBtn');
    const favBtn = document.querySelector('.faov');

    favBtn.addEventListener('click', e => {
      e.preventDefault();
      console.log('Inside favBtn');
      console.log(characterObject.name);
      addToFavorites(characterObject.name);
    });

    const nameH1 = document.getElementById("name");
    nameH1.innerHTML = characterObject.name;

    const idH1 = document.getElementById("id");
    idH1.innerHTML = `N°${characterObject.id.toString().padStart(4, '0')}`;

    const typeH1 = document.getElementById('type');
    typeH1.innerHTML = characterObject.types.join(', ');

    const imageElement = document.getElementById("image");
    imageElement.src = characterObject.image;

    const weightH1 = document.getElementById("weight");
    weightH1.innerHTML = `Weight: ${characterObject.weight} kg`;

    const heightH1 = document.getElementById("height");
    heightH1.innerHTML = `Height: ${characterObject.height} m`;

    const abilitiesUL = document.getElementById("abilities");
    abilitiesUL.innerHTML = '';
    characterObject.abilities.forEach((ability) => {
      const li = document.createElement("li");
      li.textContent = ability;
      abilitiesUL.appendChild(li);
    });

    const base_experienceH1 = document.getElementById("base_experience");
    base_experienceH1.innerHTML = `Base experience: ${characterObject.base_experience}`;

    const statsUL = document.getElementById("stats");
    statsUL.innerHTML = '';
    characterObject.stats.forEach((stat) => {
      const li = document.createElement("li");
      const statName = stat.stat.name;
      const baseStat = stat.base_stat;
      li.textContent = `${statName}: ${baseStat}`;
      statsUL.appendChild(li);
    });

    const movesUL = document.getElementById("moves");
    character.moves.slice(0, 15).forEach(move => {
      const li = document.createElement("li");
      li.textContent = move.move.name;
      movesUL.appendChild(li);
    });
  } catch (error) {
    console.log('Error al obtener los datos del personaje:', error);
  }
}

function searchById(data, id) {
  return data.find(character => character.id.toString() === id);
}

function goBack() {
  window.location.href = 'Pokedex.html';
}

getCharacter();
