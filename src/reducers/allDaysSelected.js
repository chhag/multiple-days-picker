const allDaysSelected = (state = false, action) => {
    switch (action.type) {
        case 'SELECT_ALL':
            return true
        case 'UNSELECT_ALL':
            return false
        default:
            return state
    }
}
  
export default allDaysSelected
