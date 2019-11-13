
const initialState = {
    sponsorshipCode: null,
};


function toggleSponsorship(state = initialState, action) {

    let nextState;
    switch (action.type) {
        case 'TOGGLE_SPONSORSHIPCODE':
            nextState = {
                ...state,
                sponsorshipCode: action.value
            };
            return nextState || state;
        default:
            return state
    }
}
export default toggleSponsorship