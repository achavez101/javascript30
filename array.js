// var msg = 'Hello world';
// console.log(msg);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const doneArray = [...arr1, ...arr2];
let completeArray = [];
for(const num of doneArray){
    if(!completeArray.includes(num)){
      completeArray.push(num);
  }
  if(num == 5){
    completeArray.pop(num);
  }
}
console.log(completeArray);
