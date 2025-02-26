/**
 * A basic end-inclusive range implementation in TypeScript.
 */
export class Range {
  start: number
  end: number

  constructor(start: number, end: number) {
    if (start > end) {
      /**
       * If you're trying to create a range in descending order, create the range
       * in ascending order and then call `reverse()` or `toReversed()` after
       * converting it to an array
       *
       * Example: Range.of(1, 10).toArray().reverse()
       */
      throw new Error('Start must be less than end')
    }

    this.start = start
    this.end = end
  }

  static of(start: number, end: number) {
    return new Range(start, end)
  }

  get size() {
    return this.end - this.start + 1
  }

  contains(value: number) {
    return value >= this.start && value <= this.end
  }

  overlaps(other: Range) {
    return this.start <= other.end && this.end >= other.start
  }

  union(other: Range) {
    return new Range(
      Math.min(this.start, other.start),
      Math.max(this.end, other.end)
    )
  }

  intersection(other: Range) {
    return new Range(
      Math.max(this.start, other.start),
      Math.min(this.end, other.end)
    )
  }

  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) {
      yield i
    }
  }

  toArray() {
    return [...this]
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    }
  }

  toString() {
    return `Range { start: ${this.start}, end: ${this.end} }`
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    return this.toString()
  }

  [Symbol.toStringTag] = 'Range'
}
