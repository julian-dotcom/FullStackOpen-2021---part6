import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (content) => {
    const newAnecdote = {
        content: content,
        votes: 0
    }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data
}

const voteBlog = async id => {
    let blogToUpdate = await axios.get(`${baseUrl}/${id}`)
    blogToUpdate = blogToUpdate.data    
    blogToUpdate.votes++
    const response = await axios.put(`${baseUrl}/${id}`, blogToUpdate)
    return response.data
}

export default { getAll, create, voteBlog }