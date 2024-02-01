interface SendOtpFromTypes {
  mobile?: string
  setMobile: (value: string) => void
  setStep: (value: number) => void
}

const SendOtpFrom = ({ mobile, setMobile, setStep }: SendOtpFromTypes) => {
  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMobile(event.target.value)

    const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
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
