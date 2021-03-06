'use strict'

let _input = ''
let _index = 0
process.stdin.on('data', data => {
    _input += data
})
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'))
    main()
})
function read() {
    return _input[_index++]
}

/** ** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = identification
    }

    printPerson() {
        console.log(
            'Name: ' + this.lastName + ', ' + this.firstName + '\nID: ' + this.idNumber
        )
    }
}

class Student extends Person {
    /*
     *   Class Constructor
     *
     *   @param firstName - A string denoting the Person's first name.
     *   @param lastName - A string denoting the Person's last name.
     *   @param id - An integer denoting the Person's ID number.
     *   @param scores - An array of integers denoting the Person's test scores.
     */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this.scores = scores
    }
    /*
     *   Method Name: calculate
     *   @return A character denoting the grade.
     */
    // Write your method here
    calculate() {
        const length = this.scores.length
        const score =
            length !== 0
                ? this.scores.reduce((acc, current) => acc + current, 0) / length
                : 0
        if (score < 40) return 'T'
        if (score < 55) return 'D'
        if (score < 70) return 'P'
        if (score < 80) return 'A'
        if (score < 90) return 'E'
        // if (score <= 100)
        return 'O'
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (let i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
