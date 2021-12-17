console.log('Before');
// const user = getUser(1, getRepositories);

// getUser(1)
//     .then(user => getRepositories(user.getHubUserName))
//     .then(repo => getCommits(repo[0]))
//     .then(Commits => console.log('Commits', Commits))
//     .catch(error => console.log("Error", error.message));

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.getHubUserName);
        const commit = await getCommits(repos[0]);
        console.log(commit);
    }catch(error){
        console.log('Error',error.message);
    }
}

displayCommits();

console.log('After');

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database...');
            resolve({id: id, gitHubUserName: 'viky'});
            reject(new Error('erroooooooo message'));
        }, 2000);
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching user Repository...');
            resolve(['Repo1', 'Repo2', 'Repo3', 'Repo4']);
            reject(new Error('erroooo message'));
        }, 2000);
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user commits...');
            resolve(['commit']);
            reject(new Error('erroooo message'));
        }, 2000);
    });
}