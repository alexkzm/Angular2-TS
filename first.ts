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