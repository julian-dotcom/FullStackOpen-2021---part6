import anecdoteService from '../services/anecdotes'
import { useDispatch, useSelector } from 'react-redux'


// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     //id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {

  switch(action.type) {
    case 'CREATE_ANECDOTE':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : action.data)
    case 'INIT_ANECDOTES':
        return action.data
    default:
      return state      
  }
}

export const vote = (id) => {
  return async dispatch => {
    const updatedBlog = await anecdoteService.voteBlog(id)
    dispatch({
      type: 'VOTE',
      data: updatedBlog
    })
  }
}

export const submitForm = (content) => {
  console.log(content)
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch({
      type: 'CREATE_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer