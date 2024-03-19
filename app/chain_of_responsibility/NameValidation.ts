import { Dispatch } from "react";
import IHandler from "./IHandler";
import Validation from "./Validation";

export default class NameValidation extends Validation {
    constructor() {
        super();
    }
    checking_input(userData: any, setErrorData: Dispatch<any>) {
       if(userData.name.trim() === '') {
            setErrorData((errorData) => ({
                ...errorData,
                name: 'VUI LÒNG NHẬP TÊN',
                check: false
            }));
       }
       else if (/[\d!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(userData.name)) {
        setErrorData((errorData) => ({
            ...errorData,
            name: 'TÊN KHÔNG ĐƯỢC CHỨA KÍ TỰ ĐẶC BIỆT',
            check: false
        }));
       }
       else {
        setErrorData((errorData) => ({
            ...errorData,
            name: null,
            check: true
        }));
       }
    }
}