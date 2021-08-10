//1. Create and expoert initial state
//2. add member into our initial state
//3. create a reducer function
//4. add in case ADD_NEW_MEMBER
//5. add in default case

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

