import React,{useState} from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';

const WishInput = ({onNewWish}) =>{
    const [newWishtText, setNewWishText] = useState('');
    return(
        <fieldset className='wish-input'>
                <legend className='wish-input__label'>New Wish</legend>
                <input 
                    className='wish-input__field' 
                    placeholder="Enter your wish here" 
                    value={newWishtText} 
                    onChange={e => setNewWishText(e.target.value)}
                    onKeyUp={e => {
                        if(e.key === 'Enter' && newWishtText.length){
                            onNewWish({done: false, text: newWishtText});
                            setNewWishText('');
                        }
                }} />
        </fieldset>
    );
 }
WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

WishInput.defaultProp = {
    onNewWish: () => {},
};
export default WishInput;