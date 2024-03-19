import { Dispatch } from "react";
import IHandler from "./IHandler";

export default abstract class Validation implements IHandler {
    protected validation: IHandler;
    setValidation(validation: IHandler): IHandler {
        this.validation = validation;
        return validation;
    }
    check(userData: React.ComponentState, setErrorData: Dispatch<any>) {
        this.checking_input(userData, setErrorData);
        if (this.validation != null) {
            this.validation.check(userData, setErrorData);
        }
        else {
            return;
        }
    }
    abstract checking_input(userData: React.ComponentState, setErrorData: Dispatch<any>);
}