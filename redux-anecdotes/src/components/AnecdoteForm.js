import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitForm } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        // dispatch(setNotification(content, 5000))
        props.setNotification(content, 5000)
        //setTimeout(() => dispatch(removeNotification()), 5000)
        //anecdoteService.create(content)
        //dispatch(submitForm(content))
        props.submitForm(content)
    }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name='content'/></div>
          <button type='submit'>create</button>
        </form>
      </div>
    )
}

export default connect(null, { submitForm, setNotification })(AnecdoteForm)
// export default AnecdoteForm