var name: string = 'Shurik'
var age: number = 18
var happy: boolean = true
var anything: any = 2016
anything = 'this year'

var array: string[] = ['one', 'two', 'three'] 
var favorite: Array<number> = [7,13,15]

var person: {name: string; age: number;} = {
	name: name,
	age: age
}

function say (name: string): string {
	return 'Hello' + name
}

var say = function(name: string): string {
	return 'Hello' + name
}

interface aPerson {
	name: string
	age: number
	hunger?: boolean
}

interface somePerson: aPerson {
	name: name,
	age: age,
	hunger: true
}

interface aFunction {
	(source: string, subString: string): boolean;
}

var func: aFunction
func = function(source: string, subString: string) {
	var result source.search(subString)
	if(result == -1) {
		return false
	}
	else {
		return true
	}
}

interface StringArray {
	[index: number]: string
}

interface aNewPerson {
	name: string
	age: number
	hungry?: boolean
}

class Greeter {
	greeting: string
	constructor(message: string) {
		this.greeting = message
	}
	greet() {
		return 'Hello' + this.greeting
	}
}

var greeter = new Greeter('Mother')

document.body.innerHTML = greeter.greet()

class Person {
	name: string
	age: number
	favoriteThing: string
	married: boolean
	gender?: string
	constructor(name: string, age: number, faveThing: string, married: boolean, gender?: string) {
		this.name = name
		this.age = age
		this.favoriteFood = faveFood
		this.married = married
		if(gender) {
			this.gender = gender
		}
	}
	sayHello() {
		console.log('Hello, my name is ' + this.name)
	}
}

interface thePerson {
	name: string
	age: number
	favoriteThing: string
	married: boolean
	gender?: string
	sayHello(): void
}

var me = new Person('Shurik', 18, 'air', false)

function changeFave(person: thePerson, food: string): thePerson {
	person.favoriteFood = food
	return person
}

me = changeFave(me, 'water')