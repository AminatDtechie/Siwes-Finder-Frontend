import React, { useState, useEffect } from 'react'
import OtpInput from "react-otp-input";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
const EmailVerification = () => {
    const { requestOtp, verifyOtp, isLoading, otpRequested, storedUserEmail } = useAuth();
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(60); // Countdown starts at 60 seconds
    const userEmail = storedUserEmail();
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleVerifyOtp = async () => {
        if (userEmail && otp.length === 6) {
            await verifyOtp({ otp: otp });
        }
    };

    const handleResendOtp = async () => {
        await requestOtp();
        setOtp(""); // Reset OTP field
        setTimer(60); // Restart countdown
    };

    return (
        <div className="z-[100] w-[90%] max-w-md flex flex-col gap-5 items-center bg-white min-h-80 rounded-2xl py-6 pb-8 shadow-lg">
            <h2 className="text-lg font-semibold text-center">
                Two Factor Authentication
            </h2>
            <p className="text-sm mb-4 text-center">We've sent a code to <strong>{userEmail}</strong></p>
            <OtpInput
                value={otp}
                onChange={(value) => {
                    // Allow only numbers
                    if (/^\d*$/.test(value)) {
                        setOtp(value);
                    }
                    return;
                }}
                numInputs={6}
                isInputNum
                containerStyle="flex justify-center gap-2 mb-4"
                inputStyle={{
                    background: "#0077CC",
                    borderRadius: "10px",
                    color: "white",
                    width: "50px",
                    fontSize: "25px",
                    height: "50px",
                }}
                shouldAutoFocus
                renderInput={(props) => <input {...props} inputMode="numeric" pattern="\d*" />}
            />

            <div className="mt-10 font-medium">
                <button
                    type="button"
                    disabled={isLoading?.verifyOtp || timer === 0}
                    onClick={handleVerifyOtp}
                    className="mt-3 w-full bg-primary hover:bg-blue-800 text-white p-3 rounded-md flex justify-center items-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isLoading?.verifyOtp ? (
                        <>
                            <FaSpinner className="animate-spin mr-2" />{" "}
                            Verifying...
                        </>
                    ) : (
                        "Verify OTP"
                    )}
                </button>

                {/* Show resend button only when timer reaches 0 */}
                {timer === 0 ? (
                    <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isLoading?.requestOtp || timer !== 0}
                        className="mt-3 w-full bg-black hover:bg-gray-800 text-white p-3 rounded-md flex justify-center items-center disabled:cursor-not-allowed disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading?.requestOtp ? (
                            <>
                                <FaSpinner className="animate-spin mr-2" />{" "}
                                Resending...
                            </>
                        ) : (
                            "Resend code to device"
                        )}
                    </button>
                ) : (
                    <p className="mt-4 text-center text-gray-600">
                        Resend OTP in {timer}s
                    </p>
                )}
            </div>
        </div>
    )
}

export default EmailVerification