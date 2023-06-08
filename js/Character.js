class Character {
    constructor(id, name, image, types, weight, height, abilities, base_experience, stats, moves) {
      this.id = id;
      this.name = name;
      this.image = image;
      this.types = types;
      this.weight = weight;
      this.height = height;
      this.abilities = abilities;
      this.base_experience = base_experience;
      this.stats = stats;
      this.moves = moves;
    }
  
    toHtml(pos) {
      const types = this.types.length === 2 ? `${this.types[0]}/${this.types[1]}` : this.types[0];
      
      return `
        <div class="pokemon-card" onclick="selected(${pos})">
          <p id="nombre">${this.name}</p>
          <img src="${this.image}" />
          <p id="numero">N°${this.id.toString().padStart(4, '0')}</p>
          <p id="tiposs">${types}</p>
          <p id="weight">${this.weight}</p>
          <p id="height">${this.height}</p>
          <p id="abilities">${this.abilities}</p>
          <p id="base_experience">${this.base_experience}</p>
          <p id="stats">Stats:</p>
          <ul>
            ${this.stats.map(stat => `<li>${stat.name}: ${stat.value}</li>`).join('')}
          </ul>
          <ul id="moves">
            ${this.moves.map(move => `<li>${move.name} (${move.type}) - Power: ${move.power} - Accuracy: ${move.accuracy}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }    