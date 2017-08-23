import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    // constructor() {
    //     super();
    //     // Weird one...
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        console.log('You changed the URL');
        // First grab the text from the box
        // this is not available here!
        const storeId = this.storeInput.value;
        // then transition to
        this.context.router.transitionTo(`/store/${storeId}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={ (e) => this.goToStore(e) }>
                {/* Hello */}
                <h2>Please enter a store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()}
                       ref={(input) => {this.storeInput = input }} />
                <button type="submit"> Visit store -> </button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;