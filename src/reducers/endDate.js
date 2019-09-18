const getDefaultState = () => {
    let today = new Date();
    today.setMonth(today.getMonth()+3); // 3 months from today's date
    let dd = String(today.getDate());
    let mm = String(today.getMonth() + 1); 
    let yyyy = today.getFullYear();
    return `${mm}/${dd}/${yyyy}`;    
}

const endDate = (state = getDefaultState(), action) => {
    switch (action.type) {
        case 'SET_END_DATE':
            return action.endDate;
        default:
            return state;
    }
  }
  
export default endDate;