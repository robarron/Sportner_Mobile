
const initialState = {
    sexe: null,
    userPhone: null,
    userMail: null,
    userPlacement: null,
    displayProfil: null,
    displayPic: null,
    displayMotivations: null,
    displayCaracSportives: null,
    displayDispo: null,
    displayLevel: null,
    matchNotif: null,
    msgNotif: null,
    majNotif: null,
    matchPush: null,
    msgPush: null,
    sponsorshipCode: null,
    globalEmailUser: null,
    globalUser: null,
    allImagesList: [],
    feedLikes: null,
    commentsNumber: null,
    userFeeds: [],
    userMatches: [],
    feedComments: [],
    commentsLikes: 0,
    didLikeComment: false,
    didLikeFeed: false,
    currentComment: [],
    eventItem: [],
};


function toggleParametersInfo(state = initialState, action) {

    let nextState;
    switch (action.type) {
        case 'TOGGLE_PARAMETERS_INFO':
            nextState = {
                ...state,
                displayProfil: action.value
            };
            return nextState || state;
        case 'TOGGLE_SEXE_WANTED':
            nextState = {
                ...state,
                sexe: action.value
            };
            return nextState || state;
        case 'TOGGLE_USERPHONE':
            nextState = {
                ...state,
                userPhone: action.value
            };
            return nextState || state;
        case 'TOGGLE_USERMAIL':
            nextState = {
                ...state,
                userMail: action.value
            };
            return nextState || state;
        case 'TOGGLE_USERPLACEMENT': // AFAIRE
            nextState = {
                ...state,
                userPlacement: action.value
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYPROFIL':
            nextState = {
                ...state,
                displayProfil:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYPIC':
            nextState = {
                ...state,
                displayPic:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYMOTIVATIONS':
            nextState = {
                ...state,
                displayMotivations:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYCARAC_SPORTIVES':
            nextState = {
                ...state,
                displayCaracSportives:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYDISPO':
            nextState = {
                ...state,
                displayDispo:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_DISPLAYLEVEL':
            nextState = {
                ...state,
                displayLevel:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_MATCH_NOTIF':
            nextState = {
                ...state,
                matchNotif:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_MSG_NOTIF':
            nextState = {
                ...state,
                msgNotif:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_MAJ_NOTIF':
            nextState = {
                ...state,
                majNotif:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_PUSH_MATCH':
            nextState = {
                ...state,
                matchPush:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_PUSH_MESSAGE':
            nextState = {
                ...state,
                msgPush:         action.value,
            };
            return nextState || state;
        case 'TOGGLE_SPONSORSHIPCODE':
            nextState = {
                ...state,
                sponsorshipCode: action.value
            };
            return nextState || state;
        case 'TOGGLE_GLOBAL_EMAIL_USER':
            nextState = {
                ...state,
                globalEmailUser: action.value
            };
            return nextState || state;
        case 'TOGGLE_GLOBAL_USER':
            nextState = {
                ...state,
                globalUser: action.value
            };
            return nextState || state;
        case 'TOGGLE_ALL_IMAGESLIST':
            nextState = {
                ...state,
                allImagesList: action.value
            };
            return nextState || state;
        case 'TOGGLE_FEED_LIKES':
            nextState = {
                ...state,
                feedLikes: action.value
            };
            return nextState || state;
        case 'TOGGLE_USER_FEEDS':
            nextState = {
                ...state,
                userFeeds: action.value
            };
            return nextState || state;
        case 'TOGGLE_USER_MATCHES':
            nextState = {
                ...state,
                userMatches: action.value
            };
            return nextState || state;
        case 'TOGGLE_FEEDS_COMMENTS_NUMBER':
            nextState = {
                ...state,
                commentsNumber: action.value
            };
            return nextState || state;
        case 'TOGGLE_FEEDS_COMMENTS':
            nextState = {
                ...state,
                feedComments: action.value
            };
            return nextState || state;
        case 'TOGGLE_COMMENTS_LIKES':
            nextState = {
                ...state,
                commentsLikes: action.value
            };
            return nextState || state;
        case 'TOGGLE_DID_LIKE_COMMENT':
            nextState = {
                ...state,
                didLikeComment: action.value
            };
            return nextState || state;
        case 'TOGGLE_DID_LIKE_FEED':
            nextState = {
                ...state,
                didLikeFeed: action.value
            };
            return nextState || state;
        case 'TOGGLE_CURRENT_COMMENT':
            nextState = {
                ...state,
                currentComment: action.value
            };
            return nextState || state;
        case 'TOGGLE_EVENT_ITEM':
            nextState = {
                ...state,
                eventItem: action.value
            };
            return nextState || state;
        default:
            return state
    }
}
export default toggleParametersInfo