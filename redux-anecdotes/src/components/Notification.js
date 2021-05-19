import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createNotification from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification.visible ? '' : 'none'
  }

  return (
    <div style={style}>
      {notification.notification}
    </div>
  )
}

export default Notification