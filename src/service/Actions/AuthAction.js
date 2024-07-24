import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const signUpErr = (errMsg) => {

    return {
        type: "SIGNUPERR",
        payload: errMsg
    }
}

const signUpSuc = (user) => {

    return {
        type: "REGISTER",
        payload: user
    }
}

const siginCom = (user) => {

    return {
        type: "LOGIN",
        payload: user
    }
}


export const signUpAsync = (regUser) => {

    return dispatch => {

        if (regUser.password == regUser.conf_password) {

            createUserWithEmailAndPassword(auth, regUser.email, regUser.password)
                .then((userCredential) => {
                    // Signed up 
                    let user = userCredential.user;
                    console.log("USER>>>>", user);

                    user = {
                        ...user,
                        displayName: regUser.fname + " " + regUser.lname
                    }

                    console.log("User <<<<<<<", user);


                    dispatch(signUpSuc(user))
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;

                    const errorMessage = error.message;
                    console.log(errorMessage);

                    if (errorMessage == "Firebase: Error (auth/email-already-in-use).") {
                        let errMessage = "User already register..."
                        dispatch(signUpErr(errMessage));
                    }

                    // ..
                });

        } else {

            dispatch(signUpErr("Password Not Match"))
        }


    }

}

export const signINAsync = (signUser) => {

    return dispatch => {
        signInWithEmailAndPassword(auth, signUser.email, signUser.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("User", user);
                // ...

                dispatch(siginCom(user))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("Error", errorMessage);

                dispatch(signUpErr(errorMessage))
            });



    }

}