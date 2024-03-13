import React,{useState} from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const InitialWishes = [
    {text: 'Travel to the moon',done: false},
    {text: 'Pay off student loans',done: true},
    {text: 'Buy a house',done: false},
]

const App = () => {

    const[wishes,setWishes] = useState(InitialWishes);

    return(
    
        <div className='app'>
            <h1>My Wishlist</h1>
            <WishInput onNewWish={wish => setWishes([wish,...wishes])} />
            <WishList wishes={wishes} onWishesChange={setWishes}/>
            <button className='wish-clear' type='button' 
                onClick={() => setWishes(wishes.filter(wish => !wish.done))}>
                Archive done</button>
        </div>
    );
}
export default App;