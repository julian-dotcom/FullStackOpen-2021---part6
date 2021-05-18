


const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  const obj = {...state}
  switch (action.type) {
    case 'GOOD':
      obj.good += 1
      return obj
    case 'OK':
      obj.ok += 1
      return obj
    case 'BAD':
      obj.bad += 1
      return obj
    case 'ZERO':
      return initialState
    default: return state
  }
  
}

export default counterReducer