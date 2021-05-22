import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { implementFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    (props.implementFilter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = state => {
    state.anecdotes.filter(a => a.content.includes(state.filter))
}

const mapDispatchToProps = {
    implementFilter
  }

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter
// export default Filter