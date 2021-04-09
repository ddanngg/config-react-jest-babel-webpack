import {getFlyingSuperHeros} from '../super-hero'

test('return supers hero', () => {
  const flyingHeros = getFlyingSuperHeros()
  expect(flyingHeros).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "A",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "B",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
    ]
  `)
})
