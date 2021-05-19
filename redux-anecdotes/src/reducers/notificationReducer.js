

const notificationReducer = (state = {notification: '', visible: false}, action) => {

    switch(action.type) {
        case 'CREATE_NOTIFICATION':
            return {notification: action.notification, visible: action.visible}
        case 'REMOVE':
            return {notification: action.notification, visible: action.visible}
        default:
            return state
    }
}

export const createNotification = newNotification => {
    return {
        type: 'CREATE_NOTIFICATION',
        notification: newNotification,
        visible: true
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE',
        notification: '',
        visible: false
    }
}


export default notificationReducer