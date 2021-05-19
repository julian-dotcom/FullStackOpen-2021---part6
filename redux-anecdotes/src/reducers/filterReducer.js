
const filterReducer = (state={filter: ''}, action) => {

    switch(action.type) {
        case 'FILTER':
            return {filter: action.filter}
        default:
            return state
    }
}

export const implementFilter = filter => {
    return {
        type: 'FILTER',
        filter: filter
    }
}

export default filterReducer