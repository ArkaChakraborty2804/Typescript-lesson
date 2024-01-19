let stringArr = ['one','hey','Dave']
let guitars = ['Strat','Les Paul',5150]
let mixedData = ['EVH',1984,true]

stringArr[0] = 'Arka'
stringArr.push('42')

guitars[0] = 1923
guitars.unshift('Arka')

// stringArr = mixedData
mixedData = stringArr
guitars = stringArr 

// let bands: string[] = []
// bands.push('Tarun')


//tuples
let bands: [string, number] =  ['Arka', 12]

let mixed = ['John',1,false]

mixed = bands
// bands = mixed

let array: (number|string|boolean)[] = []
array.push('Tarun',12)

//Objects
let myObj: object
myObj = []
console.log(typeof(myObj))

myObj = bands
myObj = {}

const exampleObj ={
    prop1:"Dave",
    prop2:true
}

exampleObj.prop2 = false

type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Arka',
    active: false,
    albums: [1984,5150,'Football']
}