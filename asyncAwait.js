const myPosts = [
    {title: 'Post One', body: 'This is post one body'},
    {title: 'Post Two', body: 'This is post two body'}
    ];

let getPosts = () => {                  //function
    myPosts.forEach( (post) => {        //selects each index in array and labels each one 'post' to use on body of function
        console.log(post.title);              //applies actions to 'post' (each index in the array)
        
    });
}



let createPost = (post) => {   
    
    return new Promise( (resolve, reject) => {
         setTimeout(() => {
            myPosts.push(post);                //calls getPosts() to ensure that the posts are updated before they are collected
            
            const error = false;                //****FICTIONAL ERROR**** - to represent the error function, in event of server rejection

            if(!error){
                resolve()
            }else{
                reject('Something Went Wrong!');    //Gives value to 'err' in catch statement
                
            }
        
        }, 5000);
    })

}    

async function init() {                     //async function to use await key word
    try {                                               
        await createPost({title: 'Post 3', body: 'This is post 3 body'});       //await forces JavaScript to wait on the result of this function
        getPosts();
    } catch(err) {
        console.log(err);
    }
}

init();

/* ======================================================================================================================================================================================================*/
/* ======================================================================================================================================================================================================*/