import * as constants from "../constants/signIn";
import { SignInModel } from "../../models/SignIn.model";

export interface AuthSignIn {
    type: constants.AuthUserSignIn;
    payload: SignInModel;
}

export interface AuthSignInSuccess {
    type: constants.AuthUserSignInSuccess;
    payload: {
        user: any;
    };
}

export type AuthActions = AuthSignIn | AuthSignInSuccess;

export const signIn = (signInParams: SignInModel): AuthSignIn => {
    console.log("ACTION SIGN IN ", signInParams);
    return {
        type: constants.AUTH_USER_SIGN_IN,
        payload: signInParams,
    };
};

export const signInSuccess = (user: any): AuthSignInSuccess => ({
    type: constants.AUTH_USER_SIGN_IN_SUCCESS,
    payload: {
        user,
    },
});