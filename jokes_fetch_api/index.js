
//promises
//await async
//fetch api

//fectch api
//if api fectched correctly promise is fulfied
//if api not fetched correctly promise not fulfiled i.e promise rejected 
//promises are used to prevent call back hell

//GET https://icanhazdadjoke.com/
/*const jokes=document.querySelector('#box1');
const jokesBtn=document.querySelector('#btn');
const setHeader={
    headers:{
        Accept:"application/json"
    }
}

const generateJokes=()=>{
    fetch(' https://icanhazdadjoke.com',setHeader)
    .then((res)=>
        //res here is the result achived by the api
        //the data fetche is in html format so we convert it into json
        res.json())
        .then((data)=>{
           jokes.innerHTML=data.joke;
    }).catch((error)=>{
         console.log(error);
    })
}

//function called on click
jokesBtn.addEventListener('click',generateJokes);
//function called by defaulet for the first time
generateJokes();*/

//using async-await

const jokes=document.querySelector('#box1');
const jokesBtn=document.querySelector('#btn');



const generateJokes= async ()=>{
    try{
        const setHeader={
            headers:{
                Accept:"application/json"
            }
    }
   const res= await fetch(' https://icanhazdadjoke.com',setHeader);

            const data = await res.json();                    
            jokes.innerHTML=data.joke;
}catch(error){
  console.log(`the error is ${error}`);
}
}
//function called on click
jokesBtn.addEventListener('click',generateJokes);
//function called by defaulet for the first time
generateJokes();