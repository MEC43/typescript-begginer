// type SuperPrint = {
//   <T, M>(arr: T[], b: M): T;
// };

// const superPrint: SuperPrint = (arr) => arr[0];

function superPrint<V, M>(a: V[], b: M) {
  return a[0];
}

const aa = superPrint([1, 2, 3], 'x');
const bb = superPrint([true, false], 1);
const cc = superPrint(['a', 'b'], true);
const dd = superPrint([1, 2, true, 'a'], 'a');
