import React, { useState } from 'react';
import { updateTitle } from './../actions/titleActions';
import { connect } from 'react-redux';
//  props.dispatch(updateTitle(title));
const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();

    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
        props.dispatch(updateTitle(newTitleText));
        // props.dispatch(updateTitle(title));
    }
    
    return(<div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={handleSubmit}>
            Update title
          </button>
        </div>);
}

export default connect()(TitleForm);