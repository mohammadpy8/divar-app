import { FC, useState } from 'react'
import SendOtpFrom from '../components/template/SendOtpFrom'
import CheckOtpFrom from '../components/template/CheckOtpFrom'

const AuthPage: FC = () => {
  const [step, setStep] = useState<number>(2)
  const [mobile, setMobile] = useState<string>('')
  const [code, setCode] = useState<string>('')
  return (
    <div>
      {step === 1 && (
        <SendOtpFrom setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpFrom
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  )
}

export default AuthPage
