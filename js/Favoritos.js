const results = JSON.parse(window.localStorage.getItem("favoritos"));
const list = [];
const listContainer = document.getElementById("container");

function getList() {
  for (let i = 0; i < results.length; i++) {
    const data = results[i];
    const types = [];

    if (data.types.length > 0) {
      types.push(data.types[0].type.name);

      if (data.types.length > 1) {
        types.push(data.types[1].type.name);
      }
    }

    const character = new Character(data.id, data.name, data.sprites.other["official-artwork"].front_default, types);
    list.push(character);
  }

  for (let i = 0; i < list.length; i++) {
    const character = list[i];
    listContainer.innerHTML += character.toHtml(i);
  }
}

function selected(pos) {
  const character = list[pos];
  window.location.href = `./detail.html?id=${character.id}`;
}

getList();

console.log(results)
