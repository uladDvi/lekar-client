import {UserAuthState} from "../../../../types/user.state";
import {AuthActions} from "../actions";
import {AUTH_USER_SIGN_IN_SUCCESS} from "../constants/signIn";

const userInitialState: UserAuthState = {
    user: null,
};


export default function userAuth(
    state = userInitialState,
    action: AuthActions
) {
    switch (action.type) {
        case AUTH_USER_SIGN_IN_SUCCESS: {
            return {
                user: action.payload.user,
            };
        }
        default: {
            return state;
        }
    }
}