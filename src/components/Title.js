import React
// , { useState, useReducer } 
from 'react';

import { connect } from 'react-redux';
// import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log(props);
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    props.toggleEditing();
  }

  const handleTitleUpdate = (title) => {
    props.updateTitle(title);
  }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return ({
    title: state.titleReducer.title,
    editing: state.titleReducer.editing,
    appName: state.titleReducer.appName,
  })
}

const mapActionsToProps = {
  toggleEditing,
  updateTitle
}


// export default connect(mapStateToProps, { toggleEditing,  updateTitle })(Title);
// export default connect(null, mapActionsToProps)(Title); if only actions needed no state
export default connect(mapStateToProps, mapActionsToProps)(Title);

//RECALL: connect is a higher order fucntio which is just a function that returns another fuction. 
