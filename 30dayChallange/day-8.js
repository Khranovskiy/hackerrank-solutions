function processData(input) {
    const lines = input.split('\n');
    //denoting the number of entries
    const phoneBook = {};
    const phoneBookEntryCount = parseInt(lines[0]);
    for(let lineIndex = 1; lineIndex <= phoneBookEntryCount; lineIndex++){
      const line = lines[lineIndex].trim();
      //sam 99912222\n
      const words = line.split(' ');
      const name = words[0];
      const phoneNumber = words[1];
      if(!phoneBook.hasOwnProperty(name)){
        phoneBook[name] = phoneNumber;
      }
    }
    // console.log(JSON.stringify(phoneBook));

    const queryFirstIndex = phoneBookEntryCount + 1;
    const queriesCount = lines.length - queryFirstIndex;
    // console.log(`${queryFirstIndex} ${queriesCount}`);

    for(let queryIndex = 0; queryIndex < queriesCount; queryIndex++){
      const queryName = lines[queryIndex + queryFirstIndex];
      if (!phoneBook.hasOwnProperty(queryName)){
        console.log('Not found');
        continue;
      }
      console.log(`${queryName}=${phoneBook[queryName]}`);
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
