export default {
	myVar1: ["1", "2", "3"],
	myVar2: {},
	myFun1 () {
		console.log("this is a sync function");
		var list = [1,2,3];
		for (var value in  list) {
			console.log(list[value]);
		}
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}