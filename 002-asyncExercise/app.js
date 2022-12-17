const posts = [
  { title: "Post 1", body: "This is post 1" },
  { title: "Post 2", body: "This is post 2" },
  { title: "Post 3", body: "This is post 3" },
];


//Synchronous case


const getPosts = () => {
    posts.map(post => {
        console.log(post.title);
    });
}
/*
const addPost = (post) => {
    posts.push(post);
}

addPost({ title: 'Post 4', body: 'This is post  4' });
getPosts();
*/

//Asynchronous Usings

//*************/
//Callback using
//*************/

/*
const addPost = (post, callback) => {
    posts.push(post);
    callback();
}    

addPost({ title: 'Post callback', body: 'This is post  4' }, getPosts);
*/

//*************/
//Promise using
//*************/

/*
const addPost = (post,state) => {
    return new Promise((resolve, reject) => {
        if (state) {
            posts.push(post);
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    });
}

addPost({ title: 'Post promise', body: 'This is post  4' }, true)
    .then(getPosts)
    .catch(err => console.log(err));

*/

//****************/
//Async Await using
//****************/


const addPost =  (post,state) => {
    return new Promise((resolve, reject) => {
        if (state) {
            posts.push(post);
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    });
}


const processPosts = async () => {
    try {
        await addPost({ title: 'Post asyc-await', body: 'This is post  4' }, true);
        getPosts();
    } catch (err) {
        console.log(err);
    }
}

processPosts();

