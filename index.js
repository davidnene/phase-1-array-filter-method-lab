// Code your solution here
//drivers = ['Bill','Atino','Fil','Pat','Kel','Ah', 'bill']

function findMatching (array, name) {
    const results = array.filter((word) => name.toUpperCase() === word.toUpperCase() );
    return results;
}

function fuzzyMatch(array, name) {
    const results = array.filter((word) => word.slice(0,2) === name.slice(0,2));
    return results;
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(array,name) {
      const results = array.filter(
          (arr) =>
         arr.name === name)
      return results;
  }

console.log(drivers.name)

console.log(matchName(drivers,'Bobby'))

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)