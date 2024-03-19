import React from "react";

export default interface IHandler {
    setValidation(validation : IHandler) : IHandler;
    check(userData: React.ComponentState ,setErrorData: React.Dispatch<React.SetStateAction<any>>);
}