let a: unknown;

if (typeof a === 'number') {
  let b = a + 1;
}

function hello(name: string | number) {
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    name; // never 타입
  }
}
