function* range(
  _start: number,
  _end: number,
  _step: number
): Generator<number> {
  let current = _start;
  while (current <= _end) {
    yield current;
    current += _step;
  }
}

for (const value of range(0, 10, 2)) {
  console.log(value);
}

console.log([...range(1, 10, 1)]);

const iterator = range(1, 10, 1);
console.log(iterator.next());
