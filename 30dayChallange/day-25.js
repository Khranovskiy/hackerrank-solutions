const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false
  return num > 1
}

function printStats (count, n, isPrime, stage) {
  const primeMsg = (isPrime) ? ' is PRIME.' : ' is NOT PRIME.'
  // console.log(`${stage} performed ${count} checks, determined ${isPrime}`);
}
const isPrimeBest = n => {
  // check lower boundaries on primality
  let count = 0
  if (n === 2) {
    	printStats(++count, n, true, '#1')
    	return true
  } // 1 is not prime, even numbers > 2 are not prime
  else if (n === 1 || ((n & 1) === 0)) {
    	printStats(++count, n, false, '#2')
    return false
  }
  // Check for primality using odd numbers from 3 to sqrt(n)
  const upper = Math.sqrt(n)
  for (let i = 3; i <= upper; i += 2) {
    	count++
    	// n is not prime if it is evenly divisible by some 'i' in this range
    if (n % i === 0) {
        	printStats(++count, n, false, '#3')
      return false
    }
  }
  printStats(++count, n, true, '#4')
  return true
}
function processData (inputValues) {
  const [count, ...values] = inputValues
  for (let i = 0; i < count; i++) {
    	const val = values[i]
    console.log((isPrimeBest(val) ? 'Prime' : 'Not prime'))
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', input => {
  _input += input
})

process.stdin.on('end', () => {
  processData(_input.split('\n').map(Number))
})
