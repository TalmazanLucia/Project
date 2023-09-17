import React, { useState } from "react";
import "./Chenarsignup.scss";
import { AvatarIcon } from "../../../shared/assets";
import SearchInput from "../../../shared/SearchInput/ui/SearchInput";
import { Button } from "../../../shared/Button";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../shared/providers/firebase";
import { useNavigate } from "react-router-dom";

const Chenarsignup = () => {
  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleGmail = (value) => {
    setGmail(value);
  };

  const handleName = (value) => {
    setName(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  const createUser = () => {
    //auth necesar de la firebase sa ia toate configurarile
    //gmail si password dai tu
    createUserWithEmailAndPassword(auth, gmail, password)
      .then((res) => {
        updateProfile(res.user.auth.currentUser, {
            displayName: name,
          })
          navigate('/login')
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="chenarsignup-wrapper">
      <div className="chenarsignupcontent-wrapper">
        <div className="avatar-wrapper">
          <AvatarIcon />
        </div>
        <SearchInput
          placeholder={"Gmail"}
          value={gmail}
          onChange={handleGmail}
        />

        <SearchInput
          placeholder={"Username"}
          value={name}
          onChange={handleName}
        />

        <SearchInput
          placeholder={"Password"}
          value={password}
          onChange={handlePassword}
          type={"password"}
        />

        <Button text={"Create account"} onClick={createUser} />
      </div>
    </div>
  );
};

export default Chenarsignup;
