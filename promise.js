const p = new Promise((resolve, reject) => {
    //async work
    //..
    resolve(2);
    reject(new Error('message'));
})

p
.then(result => console.log('Result', result))
.catch(err => console.log('Error', err.message));
