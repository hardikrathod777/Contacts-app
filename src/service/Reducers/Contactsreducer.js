
const initialstate = {
    contacts : [],
    contact:null,
    isLoading:false,
    isSubmit: false,
    isSingle:false,
    isErr:false
}
const Contactsreducer = (state=initialstate, action) => {
    switch (action.type) {
        case "ADDCONT":
            return { ...state,
                contacts: [...state.contacts, action.payload],
                isSubmit: true,
                isLoading: false}

        case "GETCONT":
            return {...state, contacts: action.payload, isLoading:false}

        case "SINGLECONT":
            return {...state, contact: action.payload , isSingle:true}

        case "UPDATEDONE":
            return {
                ...state,
                isSubmit: true,
                isLoading: false
            };

        case "DELETECONT":
            // eslint-disable-next-line no-case-declarations
            let myDatas = state.students;
            // eslint-disable-next-line no-case-declarations
            let newData = myDatas.filter((data) => {
                return data.id != action.payload
            })

            localStorage.setItem('myStudents', JSON.stringify(newData));
            return{
                ...state,
                contacts: newData
            }

        default:
            return state;
    }
}

export default Contactsreducer;