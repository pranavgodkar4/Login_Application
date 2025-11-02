
export const checkEmptyValue = (value:any) => {
    return value? value.trim() !== '' : false;
}

export const checkEmailValue = (email:string) => {
    console.log(email.trim().includes('@'));
    return email.trim().includes('@');
}

export const checkEqualValue = (fValue:string , sValue : string) => {
 return fValue === sValue
}