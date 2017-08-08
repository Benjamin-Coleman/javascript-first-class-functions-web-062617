function receivesAFunction(callback){
	callback()
}

function returnsANamedFunction(){
	return function ANamedFunction(){}
}

function returnsAnAnonymousFunction(){
	return (x) => {console.log(x)}
}