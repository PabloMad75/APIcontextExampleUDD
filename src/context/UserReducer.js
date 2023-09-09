export const reducer = (globalState, action) => {

    switch(action.type) {

        case "OBTENER_USUARIO":
            return {
                ...globalState,
                newUser: action.payload
            }

        default: 
            return globalState
    }
}