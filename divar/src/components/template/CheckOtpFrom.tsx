import { CheckOtpTypes } from '../../@types/checkOtp/checkOtpType'

const CheckOtpFrom = ({ code, setCode, mobile, setStep }: CheckOtpTypes) => {
  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value)

  const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ code, mobile })
  }
  return (
    <form onSubmit={submitHandle}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید را وارد کنید"
        value={code}
        onChange={changeHandle}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpFrom
