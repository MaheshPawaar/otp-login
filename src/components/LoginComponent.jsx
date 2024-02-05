import { useRecoilValue, useSetRecoilState } from 'recoil';
import { otpAtom } from '../store/atoms/Otp';
import { useRef } from 'react';

export function LoginComponent() {
  const otpSent = useRecoilValue(otpAtom);

  return (
    <div className="card">
      <h2>Login via OTP</h2>
      {!otpSent ? <NumberCard /> : <OtpCard />}
    </div>
  );
}

function NumberCard() {
  const setOtpSent = useSetRecoilState(otpAtom);

  return (
    <div>
      <div>
        <input
          type="tel"
          maxLength={10}
          placeholder="Enter your mobile number"
        />
      </div>
      <button
        onClick={() => {
          setOtpSent(true);
        }}
      >
        Send OTP
      </button>
    </div>
  );
}

function OtpCard() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const setOtpSent = useSetRecoilState(otpAtom);

  return (
    <div>
      <div className="digits">
        {inputRefs.map((inputRef, index) => (
          <input
            type="text"
            key={index}
            ref={inputRef}
            maxLength={1}
            onChange={(e) => {
              if (e.target.value.length == 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
              } else if (e.target.value.length == 0 && index > 0) {
                inputRefs[index - 1].current.focus();
              }
            }}
          />
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            alert('Login Successful');
            setOtpSent(false);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
