const superHeros = [
  {name: 'A', powers: ['disintegration ray', 'fly']},
  {name: 'B', powers: ['gravity control', 'fly']},
  {name: 'C', powers: ['control of fire', 'pyrotechnic discharges']},
  {name: 'D', powers: ['freeze water']},
  {name: 'E', powers: ['physical strength']},
  {name: 'F', powers: ['physical strength']},
  {name: 'L', powers: ['invisibility', 'force fields']},
  {name: 'M', powers: ['speed']},
]

function getFlyingSuperHeros() {
  return superHeros.filter(hero => hero.powers.includes('fly'))
}

export {getFlyingSuperHeros}
