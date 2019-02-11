import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Stuart',
    lastName: 'Fowler',
    favColor: 'hotpink'
}

function Greeting(props){
    const {user} = props;

    if(!user){
        return <h1> You are not logged in, go away </h1>;
    }

    const style = {
        color: user.favColor || 'chartreuse',
    }

    return <h1 style={style}> Welcome {user.firstName}.</h1>;
}

function LuckyNumber(props){
    return <h1>Your Luck Number is: {Math.floor(Math.random() * 1000) + 1}</h1>

}
ReactDOM.render(
    <div>
        <Greeting user={user}/>
        <LuckyNumber/>

    </div>,
    document.getElementById('root')
);

