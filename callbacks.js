const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post Two', body: 'This is post two body'}
    ];

console.log(myPosts[1].body);

let getPosts = () => {                  //function
    myPosts.forEach( (post) => {        //selects each index in array and labels each one 'post' to use on body of function
        console.log(post.title);              //applies actions to 'post' (each index in the array)
        
    });
}

let getPostsTO = () => {
    setTimeout(()=>{
        myPosts.forEach( (post) => {        //selects each index in array and labels each one 'post' to use on body of function
            console.log(post.title);              //applies actions to 'post' (each index in the array)
        
        }) 
    } , 2000)}


let createPost = (post, callback) => {                 
    setTimeout(() => {
        myPosts.push(post);
        callback();                             //calls getPosts() to ensure that the posts are updated before they are collected
    }, 5000);
}    


// createPost({title: 'Post 3', body: 'This is post 3 body'})   //With no callback
getPostsTO();
getPosts();                                                     // gets posts before the createpost is completed (it takes 5000ms), so you don't see the 3rd post in the terminal

/* ======================================================================================================================================================================================================*/
/* ======================================================================================================================================================================================================*/

createPost({title: 'Post 3', body: 'This is post 3 body'}, getPosts); //with addition of callback - waits for result
getPosts(); 


/* ======================================================================================================================================================================================================*/
/* ======================================================================================================================================================================================================*/