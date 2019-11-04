
let hello = () => {
    console.log('Hello Code Nation');
    
}



// timesFive(hello);

let timesFiveP = () => {   
    

    return new Promise( (resolve, reject) => {

            const error = false;  
            if (!error) {
                resolve()
            }else{
                reject('Something Went Wrong!');
            }
    })
}   

let timesFive = (fn)=> {
    for (let i = 0; i < 5; i++) {
       
        fn()
        .then(hello)
        .catch((err) => {
            console.log(err);      
        }) 
    }
}

timesFive(timesFiveP);
