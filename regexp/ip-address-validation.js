/* 
  Practice > Regex > Applications > IP Address Validation
    
    An integer N such that N <= 50. This is followed by N lines such 
    that each the text in each line is either an IPv4 address or an IPv6 address,
    or a chunk of text which does not equal either of these. There will be no 
    extra text or whitespace leading or trailing the IP address in a line (if it is
    an IP address). The number of characters in each line will not exceed 500.

     https://www.hackerrank.com/challenges/ip-address-validation/problem

     Sample input
3
This line has junk text.  
121.18.19.20  
2001:0db8:0000:0000:0000:ff00:0042:8329  

Sample Output
Neither    
IPv4  
IPv6 
*/
const ipv6Name = 'IPv6';
const ipv4Name = 'IPv4';
const none = 'Neither';
function processData(input) {
  const lines = input.split('\n');
  const numberOfSentence = parseInt(lines[0],10);
  const firstSentenceIndex = 1;
  const lastSentenceIndex = firstSentenceIndex + numberOfSentence - 1;
  const addresses = lines.slice(firstSentenceIndex, lastSentenceIndex + 1);
  const re = /(^(?!0+\.0+\.0+\.0+$)(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])(?:\.(?:[01]?\d\d?|2[0-4]\d|25[0-5])){3})$)|(^(?:(?:[0-9a-f]{1,4})(:[0-9a-f]{1,4}){7})$)/g; 
  // /ipv4| ipv6/g : 
  // ipv4 
  //		(^(?!0+\.0+\.0+\.0+$)(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])(?:\.(?:[01]?\d\d?|2[0-4]\d|25[0-5])){3})$)
  //		(^(?!0+\.0+\.0+\.0+$) - test for 0.0.0.0
  //		(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])(?:\.(?:[01]?\d\d?|2[0-4]\d|25[0-5])){3})$
  //			         [01]?\d\d?|2[0-4]\d|25[0-5]
  //																\.(?:[01]?\d\d?|2[0-4]\d|25[0-5])){3}
  // ipv6 
  //		(^(?:(?:[0-9a-f]{1,4})(:[0-9a-f]{1,4}){7})$)
  for(let address of addresses){
    re.lastIndex = 0;
    const groups = re.exec(address);
    let type;
    if (groups && groups[1]){
      type = ipv4Name;
    }
    else if (groups && groups[2]){
      type = ipv6Name;
    }
    else {
      type = none;
    }
    console.log(type);
  }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
