import { ADD_MEMBER } from "../actions/dragonActions";

const initialState = {
    members: [
      { name: 'Jojo Zhang', dragonStatus: true },
      { name: 'Brandon Harris', dragonStatus: false }
    ]
  };

  export const dragonReducer = (state = initialState, action) => {
      switch(action.type) {
        case ADD_MEMBER: 
            return {
                ...state,
                members: [...state.members, {name: action.payload, dragonStatus: true}]
            }
        default: 
            return state
      }
  };




// new member object was created in actions
// return {
//     ...state,
//     members: [...state.members, action.payload]
// }