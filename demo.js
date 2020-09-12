console.log('hello')
/*
const makeAPromise = () => new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('Be happy');
    }, 1000)
  }
);

makeAPromise().then((r) => {
  console.log(res);
});*/
//makeAPromise().then((res) => console.log(res)).catch((err) => console.log(err));

/*
const fun = async () => {
  try {
    const res = await makeAPromise();
    console.log('1', res);
    return;
  } catch (err) {
    throw err;
  }
}


const promise = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 1000);
});


const loop = () => {
  for(let i = 0; i < 10; i++){
    promise().then(() => {
      console.log(i)
    })
  }
}

loop();
/*
const makeFunction = () => {

  const foo = 'bar';

  return () => {
    console.log(foo);
  }
}

const bar = makeFunction();
bar();
*/
// iterators and generator
// babel
// webpack/parcel
