export interface CertFormDataType {
    loginId: String;
    name: String,
    birthday: String,
    phone: String,
    gender: String,
    nationality: String,
}

export interface LogInFormDataType {
    loginId: string,
    password: String,
    isAutoId: Boolean,
    isAutoLogin: Boolean,
}

export interface SignUpFormDataType {
    loginId: String,
    password: String,
    name: String,
    phone: String,
    address: String,
    agree1: Boolean,
    agree2: Boolean,
    agree3: Boolean,
    agree4: Boolean,
    agree5: Boolean,
    agree6: Boolean,
}

export interface ChangePWFormDataType {
    loginId: String,
    password: String,
    passwordCk: String,
}