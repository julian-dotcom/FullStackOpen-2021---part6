

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

export const setNotification = (notification, time) => {
    console.log(time)
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION',
            notification: notification
        })
        setTimeout(() => dispatch({
            type: 'NOTIFICATION',
            notification: ''
        }), time)
    }
}

export default notificationReducer