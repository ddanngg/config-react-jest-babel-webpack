import {getFlyingSuperHeros} from '../super-hero'

test('return supers hero', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toEqual([
    {name: 'A', powers: ['disintegration ray', 'fly']},
    {name: 'B', powers: ['gravity control', 'fly']},
  ])
})
