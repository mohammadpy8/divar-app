import { sendOtp } from '../../services/auth'
import { SendOtpFromTypes } from '../../@types/sendOtp/sendOtpTypes'

const SendOtpFrom = ({ mobile, setMobile, setStep }: SendOtpFromTypes) => {
  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMobile(event.target.value)
  const submitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (mobile?.length !== 11) return
    const { response, error } = await sendOtp(mobile)
    console.log(response, error)
    if (response) setStep(2)
    if (error) console.log(error)
  }

  return (
    <form onSubmit={submitHandle}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات شماره تلفن خود را وارد کنید .کد تایید به این
        شماره ارسال خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل</label>
      <input
        type="text"
        id="input"
        placeholder="شماره تلفن را وارد کنید"
        value={mobile}
        onChange={changeHandle}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  )
}

export default SendOtpFrom
