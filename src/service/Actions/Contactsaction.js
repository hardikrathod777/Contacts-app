import { collection, addDoc, getDocs, updateDoc,  doc} from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";
export const addcont = (data) => {

    return {
        type: "ADDCONT",
        payload: data
    }

}

export const getcont = (data) => {

    return {
        type: "GETCONT",
        payload: data
    }
}

export const singlecont = (single) => {

    return {
        type: "SINGLECONT",
        payload: single
    }
}


export const updateDone = () => {
    return {
        type: "UPDATEDONE"
    }
}

export const deletecont = (id) => {

    return {
        type: "DELETESTU",
        payload: id
    }
}

const loading = () => {
    return {
        type: "LOADING"
    }

}

export const navigateDone = () => {

    return {
        type: "DONENAVIGATE"
    }

}

export const addcontactAsync = (obj) => {
    return async (dispatch) => {
        dispatch(loading());

        try{
            const docRef = await addDoc(collection(db, "contacts"), obj);
            console.log("Document written with ID: ", docRef.id, docRef);
        }
        catch(e){
            console.error("Error adding document: ", e)
        }
    }
}

export const getcontactAsyc = () => {
    return async (dispatch) => {
        dispatch(loading()); 
        try {
            const querySnapshot = await getDocs(collection(db, "contacts"));
            let contacts = [];
            querySnapshot.forEach((doc) => {
            contacts.push({ id: doc.id, ...doc.data() });
            });

            console.log("Contacts", contacts);
            dispatch(getcont(contacts));
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
        }
    }

    export const editcontactAsync = (obj) => {
        return async (dispatch) => {
            dispatch({ type: 'UPDATESTART' });
            let docRef
            try {
                docRef = doc(db, 'contacts', obj.id);
                console.log("Docref", docRef);
                // await updateDoc(docRef, obj);
                // console.log('Document updated with ID: ', docRef.id); 
                // dispatch({ type: 'UPDATEDONE' });
            } catch (error) {
                console.error('Error updating document: ', error);
                dispatch({ type: 'UPDATEFAILED', payload: error });
            }
        };
    };

