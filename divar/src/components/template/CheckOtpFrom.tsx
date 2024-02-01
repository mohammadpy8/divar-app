import { CheckOtpTypes } from '../../@types/checkOtp/checkOtpType'
import { checkOtp } from '../../services/auth'
import {setCookie} from '../../utils/cookie'

const CheckOtpFrom = ({ code, setCode, mobile, setStep }: CheckOtpTypes) => {
  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCode(event.target.value)

  const submitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ code, mobile })
    if (code.length !== 5) return
    const { response, error } = await checkOtp(mobile, code)
    console.log({ response, error })
    if (response) {
      setCookie(response.data)
    }
    if (error) console.log({ error })
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
