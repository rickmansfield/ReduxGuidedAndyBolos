import React
// , { useState, useReducer } 
from 'react';

import { connect } from 'react-redux';
// import titleReducer, { initialState } from '../reducers/titleReducer';
// import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log('title props', props);
  // const [state, dispatch] = useReducer(titleReducer, initialState);

  // const handleToggleEditing = () => {
  //   // props.toggleEditing();
  //   props.dispatch(toggleEditing());
  // }

  // const handleTitleUpdate = (title) => {
  //   // props.updateTitle(title);
  //   props.dispatch(updateTitle(title));
  // }

  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          // <TitleDisplay title={props.title} handleToggleEditing={handleToggleEditing}/>: 
          // <TitleDisplay handleToggleEditing={handleToggleEditing}/>: 
          <TitleDisplay />: 
          // <TitleForm handleTitleUpdate={handleTitleUpdate}/>
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('mapStatetoProps', state);
  return {
    // title: state.titleReducer.title,
    // editing: state.titleReducer.editing,
    // appName: state.titleReducer.appName,
    appName: state.appName,
    editing: state.editing
  }
}

// const mapActionsToProps = {
//   toggleEditing,
//   updateTitle
// }


// export default connect(mapStateToProps, { toggleEditing,  updateTitle })(Title);
// export default connect(null, mapActionsToProps)(Title); if only actions needed no state
export default connect(mapStateToProps)(Title);

//RECALL: connect is a higher order fucntio which is just a function that returns another fuction. 
//mapStateToProps: (connects state to component) a fuction that gets the current state and returns an object that is added to the components props. IT is the gateway between state and props passed
// mpapActionToProps: (connect action to component) an object that contains action creators that are added to the compoennt's props AND automatically dispated when called. 