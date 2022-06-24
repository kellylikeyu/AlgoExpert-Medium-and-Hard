//given a string of length 12 or smaller, containing only digits. write a function that returns all the possible IP address that can be created by inserting three '.' 
//an IP address is a sequence of four positive integers within range 0-255, inclusive.
//'192.168.0.1' is valid, but '192.168.00.1' or '192.168.001.1'is not valid.
//return a string format
//sample input: '1921680'  output:['1.9.216.80','1.92.16.80','1.92.168.8','19.2.16.80','19.2.168.0','19.21.6.80',
                                   '19.21.48.0','19.216.8.0','192.1.6.80','192.1.68.0','192.16.8.0']
function validIPAddresses(string) {
  const valideIPs=[];
  for(let i=1; i<4; i++) {
    const firstIP=string.slice(0,i) + '.';
    for(let j=i+1; j<i+4; j++) {
      const secondIP=string.slice(i,j) + '.';
      for(let k=j+1; k<j+4; k++) {
        const thirdIP=string.slice(j,k) + '.';
        const fourthIP=string.slice(k,string.length);
        const IP = firstIP+secondIP+thirdIP+fourthIP;
        if(validIP(IP)) {
          valideIPs.push(IP);
        }
      }
    }
  }
  return valideIPs;
}

function validIP(string) {
  const ipArray = string.split(".");
  if(ipArray.length !== 4) {return false;}
  for (let num of ipArray) {
    if (num === '') {return false;}
    if (num.startsWith('0')) {
      if (num!== '0') {
        return false;
      }
    }
    if (Number(num)<0 | Number(num) > 255) {return false;}
  }
  return true;
}
