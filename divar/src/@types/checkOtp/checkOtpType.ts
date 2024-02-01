export interface CheckOtpTypes {
    code: string,
    mobile: string,
    setCode: (code: string) => void,
    setStep:(step: number) => void
}