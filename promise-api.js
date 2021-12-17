 
const p1 = new Promise((respond, reject) =>{
    setTimeout(() => {
        console.log('Fetching from facebook...');
        respond(1)
    },2000)
});

const p2 = new Promise((respond, reject) => {
    setTimeout(() => {
        console.log('Fetching forom github...');
        respond(2)
    },2000)
});

Promise.race([p1, p2])
    .then(result => console.log('Result:', result))
    .catch(error => console.log('Error:', error));
