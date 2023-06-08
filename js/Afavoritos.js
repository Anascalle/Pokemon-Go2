async function addToFavorites(characterName) {
  console.log("inside addToFavorites");
  console.log(`characterName = ${characterName}`);
  try {
    const apiUrl =
      "https://raw.githubusercontent.com/Anascalle/Pokemon-Go/main/js/data1.json";
    const response = await fetch(apiUrl);
    const data = await response.json();
    const character = data.find(
      (character) =>
        character.name.toLowerCase() === characterName.toLowerCase()
    );

    if (character) {
      const favoriteCharacter = new Character(
        character.name,
        character.id,
        character.sprites.other["official-artwork"].front_default,
        character.types.map((type) => type.type.name)
      );

      let favoriteList = localStorage.getItem("favoriteList");
      if (favoriteList === null) {
        favoriteList = [];
      } else {
        favoriteList = JSON.parse(favoriteList);
      }

      favoriteList.push(favoriteCharacter);
      const listStr = JSON.stringify(favoriteList);
      localStorage.setItem("favoriteList", listStr);

      console.log(`Character '${favoriteCharacter.name}' added to favorites.`);
    } else {
      console.log("Character not found.");
    }
  } catch (error) {
    console.log("Error al agregar a favoritos:", error);
  }
}
