import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitForm } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        event.target.content.value = ''
        dispatch(submitForm(content))
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

export default AnecdoteForm