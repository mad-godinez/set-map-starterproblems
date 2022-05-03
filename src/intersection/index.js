/**
 * initialize a new Map
initialize a new Set
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the Set
convert the Set to an array and return
 */
function intersection(a=[],b=[]){
  if(a.length < 1 || b.length < 1) return [];

  let unique = new Set();
  b.forEach((value)=> {
    if(a.includes(value))
      unique.add(value)
  });

  return [...unique];
}

module.exports = intersection;

function solution(a, b){
  const map = new Map();
  const results = new Set();
  for (let e of a) {
    map.set(e, e);
  }

  for (let e of b) {
    if (map.has(e)) {
      results.add(e);
    }
  }

  return Array.from(results);
}