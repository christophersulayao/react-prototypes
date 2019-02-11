import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Stuart',
    lastName: 'Fowler',
    favColor: 'hotpink'
}

// const number = Math.floor(Math.random() * 1000) + 1


function Greeting(props){
    const {user} = props;

    if(!user){
        return <h1> You are not logged in, go away </h1>;
    }

    const style = {
        color: user.favColor || 'chartreuse'
    }

    return <h1 style={style}> Welcome {user.firstName}.</h1>;
}

function LuckyNumber(props){
    return <h1> Your Lucky Number is: 346</h1>
}
ReactDOM.render(
    <div>
        <Greeting user={user}/>
        <LuckyNumber/>

    </div>,
    document.getElementById('root')
);

// // Create a function called luckyNumber
// // Takes no parameters
// function LuckyNumber(){
//     // Return a random number between 1-1000
//     return Math.floor(Math.random() * 1000) + 1
// }
//
// // Create a function called greeting
// function Greeting(props){
//     // The parameter will be a user object that has
//     // a property of name and a property of luckyNumber
//     const user = {
//         name: 'Chris',
//         luckyNumber: = LuckyNumber()
//     }
//
//     // const {user} = props;
//     return (
//         // Return a <div> that has a class of container
//         // and two children elements, a <h1> and a <h2>
//         <div class="container">
//             <h1>Sup {props.name}</h1>
//             <h2 class="text-muted"></h2>
//         </div>
//     )
// }
//
// ReactDOM.render(
//     <h1 className="container">React Prototypes!</h1>
//     <div>
//         <Greeting {user.name}="Chris"/>
//     </div>,
//     document.getElementById('root')
//
// );