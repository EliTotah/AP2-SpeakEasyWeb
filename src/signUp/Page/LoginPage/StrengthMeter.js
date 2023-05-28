import React from "react";
import "./StrengthMeter.css";

const StrengthMeter = (props) => {
  const initPwdChecker = () => {
    let pwdCheck = 0;
    let validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(props.password)) {
        pwdCheck += 1;
      }
    });
    switch (pwdCheck) {
      case 0:
        return {
          strength: 0,
          val: "",
        };
      case 1:
        return {
          strength: 1,
          val: "weak",
        };
      case 2:
        return {
          strength: 2,
          val: "fair",
        };
      case 3:
        return {
          strength: 3,
          val: "good",
        };
      case 4:
        return {
          strength: 4,
          val: "strong",
        };
      default:
        return null;
    }
  };

  const { password, confirmPassword } = props;
  const isPasswordMatch = password === confirmPassword;

  return (
      <div className="wrapper">
        <progress
          className={`pwd-checker-bar strength-${initPwdChecker().val}`}
          value={initPwdChecker().strength}
          max="4"
        />
        <div className="pwd-label">
          {props.password && (
            <div>
              <div className={`strengthLabel-${initPwdChecker().val}`}>
                Password strength validation:
                <strong>{initPwdChecker().val}</strong>
              </div>
            </div>
          )}
          {isPasswordMatch && <div className="littleLabel">Passwords match</div>}
          {!isPasswordMatch && confirmPassword && (
            <div className="strengthLabel">Passwords do not match</div>
          )}
        </div>
      </div>
  );
};

export default StrengthMeter;
