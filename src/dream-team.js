const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 let team = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
function createDreamTeam(team) {
  if (!Array.isArray(team)) {
   return false;
  } 
  let newTeam = [];
  for (let elem of Object.values(team)) {
    if (typeof (elem) == 'string') {
      elem = elem.split(" ").join("");
      newTeam.push(elem[0].toUpperCase());
    }
  };
  newTeam = newTeam.sort();
  return newTeam.join('');
}
createDreamTeam(team)

module.exports = {
  createDreamTeam
};
