// Task Number 1
const convertFahrToCelcius = (temp) => {
  if(!Number.isInteger(parseInt(temp)) || Array.isArray(temp)){
    return `${JSON.stringify(temp)} is not a valid number but a/an ${Object.prototype.toString.call(temp).slice(8, -1).toLowerCase()}`
  }else{
  let result = (temp - 32)*(5/9);
  return result.toFixed(4);
  }      
}

convertFahrToCelcius();




//Task Number 2
const checkYuGiOh = (n) => {
  const arr = [];
  let str;
  if(!Number.isInteger(parseInt(n))){
    return `invalid parameter: ${JSON.stringify(n)}`
  }else{

  for(let i = 1; i <= n; i++){
    str="";
    if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
      str += "yu-gi-oh"
    }else if(i % 3 === 0 && i % 5 === 0){
      str += "gi-oh"
    }else if(i % 2 === 0 && i % 3 === 0){
      str += "yu-gi"
    }else if(i % 2 === 0 && i % 5 === 0){
      str += "yu-oh"
    }else if(i % 2 === 0){
      str += "yu"
    }else if(i % 3 === 0){
      str += "gi"
    }else if(i % 5 === 0){
      str += "oh"
    }
    arr.push(str||i)
  }
}
  return arr;
}

checkYuGiOh();
