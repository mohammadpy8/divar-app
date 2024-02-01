import api from "../configs/api";

const sendOtp = async (mobile: string) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (mobile: string, code: string) => {
  try {
    const response = await api.post("auth/check-otp", { mobile, code });
    return { response };
  } catch (error) {
    return { error };
  }
};

export { sendOtp, checkOtp };
