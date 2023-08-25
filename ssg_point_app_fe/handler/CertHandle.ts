'use client'

import { CertFormDataType } from "@/types/certFormDataType";



export const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    certData: CertFormDataType,
    setCertData: React.Dispatch<React.SetStateAction<CertFormDataType>>
  ) => {
    const { name, value } = e.target;
    setCertData({
      ...certData,
      [name]: value
    });
  }

export const handleLocalStorage = (name: String, phone: String) => {
    phone = formatPhoneNumber(phone.toString())
    localStorage.setItem('tempName', name.toString())
    localStorage.setItem('tempPhone', phone.toString())
}
const formatPhoneNumber = (number: string) => {
  return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
};