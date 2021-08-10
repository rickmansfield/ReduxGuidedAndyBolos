import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing, updateTitle } from '../actions/titleActions';

const TitleDisplay = (props)=> {

  console.log('Title Display',props);
  
  const handleClick = () =>{
    props.toggleEditing();
    // props.dispatch(toggleEditing());
  };
    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          // onClick={props.handleToggleEditing}
          onClick={handleClick}
        />
    </h2>);
}

const mapStateToProps = (state)=> {
  return ({
    title: state.title
  });
}
const mapActionsToProps = {
  toggleEditing: updateTitle
}
// export default TitleDisplay;
export default connect (mapStateToProps, mapActionsToProps)(TitleDisplay);