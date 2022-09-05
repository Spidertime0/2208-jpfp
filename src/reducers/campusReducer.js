const initialState =
{
    campuses: {},
    campusToAdd: {},
    campusToDelete: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case "LIST_CAMPUS":
            return {...state}
        case "ADD_CAMPUS":
            return {...state, campusToAdd: action.campus}
        case "DELETE_CAMPUS":
            return {...state, campuses: state.campuses.filter(campus => campus.id !== action.campusId)}
        default:
            return state;
    }
}