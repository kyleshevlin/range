import { Range } from '../src/index'

test('constructor', () => {
  expect(new Range(1, 10).toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  expect(new Range(-10, -1).toArray()).toEqual([
    -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
  ])
  expect(() => new Range(10, 1)).toThrow('Start must be less than end')
})

test('of', () => {
  const range = Range.of(1, 10)
  expect(range.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('start', () => {
  const range = Range.of(1, 10)
  expect(range.start).toEqual(1)
})

test('end', () => {
  const range = Range.of(1, 10)
  expect(range.end).toEqual(10)
})

test('size', () => {
  const range = Range.of(1, 10)
  expect(range.size).toEqual(10)
})

test('contains', () => {
  const range = Range.of(1, 10)
  expect(range.contains(5)).toEqual(true)
  expect(range.contains(11)).toEqual(false)
})

test('overlaps', () => {
  const range = Range.of(1, 10)
  expect(range.overlaps(Range.of(5, 15))).toEqual(true)
  expect(range.overlaps(Range.of(11, 20))).toEqual(false)
})

test('union', () => {
  const range = Range.of(1, 10)
  expect(range.union(Range.of(11, 20))).toEqual(Range.of(1, 20))
})

test('intersection', () => {
  const range = Range.of(1, 10)
  expect(range.intersection(Range.of(5, 15))).toEqual(Range.of(5, 10))
})

test('iterator', () => {
  const range = Range.of(1, 10)
  expect([...range]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('toArray', () => {
  const range = Range.of(1, 10)
  expect(range.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('toJSON', () => {
  const range = Range.of(1, 10)
  expect(range.toJSON()).toEqual({ start: 1, end: 10 })
})

test('toString', () => {
  const range = Range.of(1, 10)
  expect(range.toString()).toEqual('Range { start: 1, end: 10 }')
})
