//1. create and export and action constant for ADD_NEW_MEMBER. 
//2. Create and expoer an action creator for addNewMember

// Constants=========
export const ADD_MEMBER = "ADD_MEMBER"

// Action Creators==============
export const addMember = (name) => {
    return {
        type: ADD_MEMBER,
        payload:  name,
    }
}

// creating the new member object in the actions
// return {
//     type: ADD_MEMBER,
//     payload:  {name: name, dragonStatus: true},
// }