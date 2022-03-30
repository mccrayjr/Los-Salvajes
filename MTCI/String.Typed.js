// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

const typedStr = (str1, str2) => {
  let workingArr1 = []
  let workingArr2 = []
  let finalStr1 = ''
  let finalStr2 = ''


  //make this into helper func
  for(let i = 0; i < str1.length; i++){
    if(str1[i] === '#'){
      workingArr1.pop(str1[i])
    } else {
      workingArr1.push(str1[i])
    }
  }

  for(let i = 0; i < str2.length; i++){
    if(str2[i] === '#'){
      workingArr2.pop(str2[i])
    } else {
      workingArr2.push(str2[i])
    }
  }
  finalStr1 = workingArr1.join('')
  finalStr2 = workingArr2.join('')
  if(finalStr1 === finalStr2){
    return true
  } else {
    return false
  }
}

const typedStr = (str1, str2) => {

}

console.log(typedStr("ab#c", "ad#c"))
