import React from 'react';
import PropTypes from "prop-types";
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
static propTypes = {
    history: PropTypes.object
}

    myInput = React.createRef();
    constructor(){
        super();
        this.goToStore = this.goToStore.bind(this);
        console.log('commm')
    }
    goToStore(event){
        //stop thee form from submiting
        event.preventDefault();
        //get the text from that input

       const storeName =  this.myInput.value.value;

        //Change the page to /store/whatever
        this.props.history.push(`/store/${storeName}`);
    }
    render() {
        return (
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}

export default StorePicker;