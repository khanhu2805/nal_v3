import { Dispatch } from "react";
import IHandler from "./IHandler";
import Validation from "./Validation";

export default class PasswordValidation extends Validation {
    constructor() {
        super();
    }
    checking_input(userData: any, setErrorData: Dispatch<any>) {
       if(userData.password.length < 6) {
            setErrorData((errorData) => ({
                ...errorData,
                password: 'PASSWORD PHẢI CHỨA ÍT NHÂT 6 KÍ TỰ',
                check: false
            }));
       }
       else if (!/[A-Z]/.test(userData.password)) {
            setErrorData((errorData) => ({
                ...errorData,
                password: 'PASSWORD PHẢI CHỨA ÍT NHÂT MỘT CHỮ CÁI VIẾT HOA',
                check: false
            }));
       }
       else if(!/[a-z]/.test(userData.password)) {
        setErrorData((errorData) => ({
            ...errorData,
            password: 'PASSWORD PHẢI CHỨA ÍT NHÂT MỘT CHỮ CÁI VIẾT THƯỜNG',
            check: false
        }));
       }
       else if (!/\d/.test(userData.password)) {
        setErrorData((errorData) => ({
            ...errorData,
            password: 'PASSWORD PHẢI CHỨA ÍT NHÂT MỘT CHỮ KÍ TỰ SỐ',
            check: false
        }));
       }
       else if (!/[!@#$%^&*]/.test(userData.password)) {
        setErrorData((errorData) => ({
            ...errorData,
            password: 'PASSWORD PHẢI CHỨA ÍT NHÂT MỘT CHỮ KÍ TỰ ĐẶC BIỆT',
            check: false
        }));
       }
       else {
        setErrorData((errorData) => ({
            ...errorData,
            password: null,
            check: true
        }));
       }
    }

}