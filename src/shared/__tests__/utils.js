import {getFormattedValue} from '../utils'

test('format the value', () => {
  expect(getFormattedValue('1223.0')).toBe('1,223.0')
})
