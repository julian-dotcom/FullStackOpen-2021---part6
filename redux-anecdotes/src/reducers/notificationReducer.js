

const notificationReducer = (state = {notification: '', visible: false}, action) => {
    switch(action.type) {
        // case 'CREATE_NOTIFICATION':
        //     return {notification: action.notification, visible: action.visible}
        // case 'REMOVE':
        //     return {notification: action.notification, visible: action.visible}
        case 'NOTIFICATION':
            const isVisible = action.notification === '' ? false : true 
            return { notification: action.notification, visible: isVisible }
        default:
            return state
    }
}

// export const createNotification = newNotification => {
//     return {
//         type: 'CREATE_NOTIFICATION',
//         notification: newNotification,
//         visible: true
//     }
// }

// export const removeNotification = () => {
//     return {
//         type: 'REMOVE',
//         notification: '',
//         visible: false
//     }
// }
let timer = undefined // define timer so that we can check if it has been initialized by the setTimeout funciton
export const setNotification = (notification, time) => {
    return async dispatch => {
        if (timer !== undefined) {
            console.log(timer)
            window.clearTimeout(timer)
        }

        dispatch({
            type: 'NOTIFICATION',
            notification: notification
        })
        timer = await window.setTimeout(() => dispatch({
                type: 'NOTIFICATION',
                notification: ''
            }), time)
    }
}

export default notificationReducer