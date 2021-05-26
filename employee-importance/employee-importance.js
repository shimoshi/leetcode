/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  let result = 0;
  
  for (let employee of employees) {
    if (employee.id === id) {
      result += employee.importance;
      
      for (let sub of employee.subordinates) {
        result += GetImportance(employees, sub);
      }
    }
  }
  
  
  return result;
};