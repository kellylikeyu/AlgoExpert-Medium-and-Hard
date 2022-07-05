//open the keypad of mobile phone, there are characters with each number.
//given a stringified phone number of any non-zero length, write a function that returns all mnemonics for this phone number
//sample input: "1905"  sample output: ['1w0j','1w0k','1w0l','1x0j',1x0k','1x0l','1y0j','1y0j','1y0k','1y0l','1z0j','1z0k','1z0l']

function phoneNumberMnemonics(phoneNumber) {
  // const current = new Array(phoneNumber.length).fill(0);
  //return phoneNumberMnemonicsHelper(phoneNumber,0,current,[]);
  return phoneNumberMnemonicsHelper(phoneNumber,0,[],[]);
}

function phoneNumberMnemonicsHelper(phoneNumber,index,characters,result) {
   const num_letters = {1:['1'],2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],
                      5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],
                      8:['t','u','v'],9:['w','x','y','z'],0:['0']}
  if (index===phoneNumber.length) {
    result.push(characters.join(''));
    return result;
  }
  
  let letters = num_letters[phoneNumber[index]];
  for (const letter of letters) {
    characters[index] = letter;
    phoneNumberMnemonicsHelper(phoneNumber,index+1,characters,result)
  }
  return result;
}
