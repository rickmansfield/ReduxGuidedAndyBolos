import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing } from '../actions/titleActions';
const TitleDisplay = (props)=> {
  const handleClick = () =>{
    props.dispatch(toggleEditing);
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
// export default TitleDisplay;
export default connect (mapStateToProps)(TitleDisplay);