import React, { useState } from "react";
import "./Chenarlog.scss";
import { AvatarIcon } from "../../../shared/assets";
import SearchInput from "../../../shared/SearchInput/ui/SearchInput";
import { Button } from "../../../shared/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../shared/providers/firebase";
import { useNavigate } from "react-router-dom";

const Chenarlog = () => {
  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGmail = (value) => {
    setGmail(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, gmail, password)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="chenarlog-wrapper">
      <div className="chenarlogcontent-wrapper">
        <div className="avatar-wrapper">
          <AvatarIcon />
        </div>
        <SearchInput
          placeholder={"Gmail"}
          value={gmail}
          onChange={handleGmail}
        />

        <SearchInput
          placeholder={"Password"}
          value={password}
          onChange={handlePassword}
          type={"password"}
        />

        <Button text={"Login"} onClick={signInUser} />
      </div>
    </div>
  );
};

export default Chenarlog;
