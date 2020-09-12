/*
var a = new Promise(function(resolve, reject) {
  setTimeout( () => {
    resolve('I am Simon')
  }, 2000);
});
a.then(()=>{
  console.log(a);
});
console.log(a);

var b = new Promise((resolve1,reject1) => {
  setTimeout(() => {
    reject1('I am rejected');
  },2000);
})

b.catch((value)=>{
  console.log(value);
  console.log(b);
});
console.log(b);

*/
asyncFn()
.then(syncFn)
.then(asyncFn);

function asyncFn(data) {
	return new Promise(function(resolve, reject) {
      		 console.log('Async received data:', data);
			 setTimeout(function(){
				resolve('async fn');
			 }, 1000);
		   });
}

function syncFn(data) {
  console.log('Sync received data:', data);
  return 'sync fn';
}