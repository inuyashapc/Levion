import vn from "../images/vietnam 1.png";
import layer from "../images/Layer 1.png";
import "../Components/register.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import React, { useState } from "react";
function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const newUser = {
  //   method: "POST",
  //   body: JSON.stringify({
  //     fullname: nameRef.value,
  //     phone: "0832609879",
  //     date_of_birth: "2000/03/20",
  //     email: emailRef.value,
  //     password: passwordRef.value,
  //   }),
  // };
  // function handleCreate() {
  //   axios
  //     .post("https://dev.go.locate.sa/api/admin/api/v1/test/register", newUser)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // async function signUp() {
  //   let newUser = {fullname,email,password}
  //   console.log(newUser);
  //   // let result = await axios.post("https://dev.go.locate.sa/api/admin/api/v1/test/register",
  //   // {
  //   // ...newUser
  //   // })

  //   const result = await axios({
  //     method: 'post',
  //     url: 'https://dev.go.locate.sa/api/admin/api/v1/test/register',
  //     data: newUser
  //   });

  //   console.warn(result);
  // }

  async function signUp() {
    const res = await axios.post(
      "https://dev.go.locate.sa/api/admin/api/v1/test/register",
      {
        fullname: fullname,
        email: email,
        password: password,
      }
    );

    console.log("res->", res);
    setUser(res.data.user);
    console.log(res.data.user);
    // .then(function (response) {
    //   setUser(response.data.user);
    //   console.log(response.data.user);
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    try {
      const response = await axios.patch(
        `https://dev.go.locate.sa/api/admin/api/v1/test/users/${res.data.user}/active`,
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.NjQzNjIyMmQ1NzgwMTEzOWNmYzUyNzMx.FHuabwi3sRHJqU0pBYTZlaZX2nOMgAv88tzNfOPgHpM",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="register-background">
        <img src={vn} alt="" />
      </div>
      <form>
        <div className="register-detail-img">
          <img src={layer} alt="" />
        </div>
        <h2>Create an account</h2>
        <div className="content">
          <label htmlFor="fullname">
            Full Name <span>*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Your Name"
            ref={nameRef}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <br />
          <input
            type="email"
            placeholder="Your Email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">
            Password <span>*</span>
          </label>
          <br />
          <input
            type="password"
            placeholder="Your Password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
        </div>
        <div className="checkbox">
          <input type="checkbox" />I accept Levion’s{" "}
          <span>Terms of Service</span> and
          <span>Privacy Policy</span>.
        </div>
        <button type="button" onClick={signUp}>
          Create Account
        </button>
        <p>
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </form>
    </>
  );
}
export default Register;
