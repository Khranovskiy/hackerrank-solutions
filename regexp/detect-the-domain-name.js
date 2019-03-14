/* 
Practice > Regex > Applications > Detect the Domain Name
https://www.hackerrank.com/challenges/detect-the-domain-name/problem
# Input Format    
# Output Format
# Sample input
# Sample Output
*/
function processData(input) {
    const data = input.split('\n');
    const n = parseInt(data[0]);
    const text = data.slice(1).join(' ');
    console.log(detectDomains(input).sort().join(';'));
}

function detectDomains(input) {
    const domainRegExp = /https?:\/\/(ww[w2]\.)?([-\w.]+\.[a-z]+)/gi
    const domains = new Set();
    input.replace(domainRegExp, function(_,__,domain) {
        domains.add(domain)
    })
    return Array.from(domains);
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