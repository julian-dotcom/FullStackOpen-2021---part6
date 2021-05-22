import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import createNotification from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification
  console.log(notification)
  // const notification = useSelector(state => state.notification)
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

const mapStateToProps = state => {
  return {
    notification: state.notification,
    visible: state.visible
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
// export default Notification