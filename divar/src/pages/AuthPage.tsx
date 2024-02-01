import { FC, useState } from 'react'
import SendOtpFrom from '../components/template/SendOtpFrom'
import CheckOtpFrom from '../components/template/CheckOtpFrom'

const AuthPage: FC = () => {
  const [step, setStep] = useState<number>(1)
  const [mobile, setMobile] = useState<string>('')
  const [code, setCode] = useState<string>('')
  return (
    <div>
      {step === 1 && <SendOtpFrom />}
      {step === 2 && <CheckOtpFrom />}
    </div>
  )
}

export default AuthPage
