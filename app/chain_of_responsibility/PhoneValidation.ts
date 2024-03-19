import { Dispatch } from "react";
import IHandler from "./IHandler";
import Validation from "./Validation";
import prisma from '@/app/prismadb';

export default class PhoneValidation extends Validation {
    constructor() {
        super();
    }
    checking_input(userData: any, setErrorData: Dispatch<any>) {
        const phone_exists = async() => {
            const phone = await prisma.user.count({
                where: {
                    phone: userData.phone
                }
            })
            if (phone > 0) return true;
            return false;
        }
       if(!(userData.phone.length == 10) || !(userData.phone.startsWith("0"))) {
            setErrorData((errorData) => ({
                ...errorData,
                phone: 'NHẬP SAI ĐỊNH DẠNG SỐ ĐIỆN THOẠI',
                check: false
            }));
       }
       else if (/[\!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(userData.phone)) {
        setErrorData((errorData) => ({
            ...errorData,
            phone: 'SỐ ĐIỆN THOẠI KHÔNG ĐƯỢC CÓ KÍ TỰ ĐẶC BIỆT',
            check: false
        }));
       }
       else if (phone_exists) {
        setErrorData((errorData) => ({
            ...errorData,
            phone: 'SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI',
            check: false
        }));
       }
       else {
        setErrorData((errorData) => ({
            ...errorData,
            phone: null,
            check: true
        }));
       }
    }

}