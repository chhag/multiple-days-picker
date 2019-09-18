const getDefaultState = () => {
    let today = new Date();
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1);
    let yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;    
}

const startDate = (state = getDefaultState(), action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return action.startDate;
        default:
            return state;
    }
  }
  
export default startDate;