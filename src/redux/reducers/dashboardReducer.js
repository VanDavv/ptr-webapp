import * as actionTypes from "../actions/actionTypes";

const reducer = (state = {clicked: false, sagaClicked: false}, action) => {
    switch (action.type) {

        case actionTypes.BUTTON_CLICKED: {
            console.log("ButtonClicked reducer");
            return {
                ...state,
                clicked: !state.clicked
            };
        }
        case actionTypes.SAGA_IN_PROGRESS: {
            console.log("SagaInProgress reducer");
            return {
                ...state,
                sagaClicked: false
            };
        }
        case actionTypes.SAGA_DONE: {
            console.log("SagaDone reducer");
            return {
                ...state,
                sagaClicked: true
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;