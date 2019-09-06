function GCDMatrix(a, b) {
  let m = [];
  for (let i = 0; i < a.length; i++) {
    m[i] = [];
    for (let j = 0; j < b.length; j++) {
      m[i][j] = gcd(a[i], b[j]);
    }
  }

  return m;
}

// a, b - numbers
function gcd(a, b) {
  if (a % b === 0) return b;

  return gcd(b, a % b);
}

function individualNumbers(matrix, r1, c1, r2, c2) {
  let map = []
  for(let i=r1; i<=r2; i++) {
    for(let j=c1; j<=c2; j++) {
      if(!map.includes(matrix[i][j])) {
        map.push(matrix[i][j])
      }
    }
  }

  return map.length
}

const a = [1, 2, 3]
const b = [2, 4, 6]
const r1 = 0
const c1 = 0
const r2 = 1
const c2 = 1

console.log('part a', a.slice(r1, r2 + 1))
console.log('part b', b.slice(c1, c2+1))

const matrix = GCDMatrix(a.slice(r1, r2 + 1), b.slice(c1, c2+1))

console.log(matrix);
// console.log(gcd(516, 1220));
