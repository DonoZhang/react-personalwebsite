const initState = {
    viewportWidth: window.innerWidth
}
 
//to be dispatched by 'PersonalWebsite'
//state to be used by 'responsiveWrapper' 
export default function(state = initState, action){
    switch(action.type){
        case 'UPDATE_VIEWPORT_WIDTH': 
            return {...state, viewportWidth: action.viewportWidth}
        default:
            return state
    }
}