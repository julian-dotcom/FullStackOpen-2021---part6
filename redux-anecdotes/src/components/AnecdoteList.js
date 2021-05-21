import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
        {anecdote.content} 
        <br /> ...has {anecdote.votes} votes.
        <button onClick={handleClick}>vote</button>
    </div>
  )
}  

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)
    console.log(anecdotes)
    const filter = useSelector(state => state.filter.filter).toLowerCase()
    return (
        <div>
            {
            anecdotes
                .filter(a => a.content.toLowerCase().includes(filter))
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote => <Anecdote anecdote={anecdote} handleClick={() => dispatch(vote(anecdote.id))} /> )
            }
        </div>
    )
}

export default AnecdoteList

