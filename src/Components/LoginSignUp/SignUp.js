import { React, useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../Host";
import { Backdrop } from "@mui/material";

function SignUp({ signUp, setSignUp, setLogin }) {
  const host = Data.URL;

  const navigate = useNavigate();
  const [FN, SetFN] = useState("");
  const [IN, SetIN] = useState("");
  const [ML, SetML] = useState("");
  const [MN, SetMN] = useState("");
  const [PD, SetPD] = useState("");
  const [GR, SetGR] = useState("");
  const [CPD, SetCPD] = useState("");
  const [checkbox, SetCheckbox] = useState(false);
  const [proof, SetProof] = useState("");
  var [response, setResponse] = useState("");

  async function postUserDetails(e) {
    e.preventDefault();
    const formimgData = new FormData();
    formimgData.append("proof", proof);
    formimgData.append("gender", GR);
    formimgData.append("name", FN);
    formimgData.append("institute", IN);
    formimgData.append("number", MN);
    formimgData.append("email", ML);
    formimgData.append("password", PD);
    console.log(formimgData);

    if (checkbox) {
      if (PD === CPD) {
        if (proof !== "") {
          const config = {
            headers: { "content-type": "multipart/form-data" }
          };
          const response = await axios
            .post(`${host}/signupuser`, formimgData, config)
            .then((res) => res.data);
          console.log(response);
          if (response.success) {
            // Save the auth token and redirect
            localStorage.setItem("auth-token", response.authtoken);
            localStorage.setItem("user", JSON.stringify(response.user));
            window.location.reload(false);
            document.body.style.overflow = "auto";
            setResponse("SuccessFully Created Account");
          } else {
            setResponse("Cant Create Account, Pls Try Again");
          }
        } else {
          setResponse("Attach a valid Proof");
        }
      } else {
        setResponse("Passwords Not Matched");
      }
    } else {
      setResponse("Please agree the terms & conditions");
    }
    e.preventDefault();
  }

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={signUp}
    >
      <Wrap>
        <Close
          onClick={() => {
            document.body.style.overflow = "auto";
            setSignUp(false);
          }}
        ></Close>

        <form action="" method="" onSubmit={postUserDetails}>
          <div className="div_perin heading_perin">
            <h2 className="h2_perin">SIGN UP</h2>

            <p className="p_perin">
              Already Registered?{" "}
              <a
                className="a_perin"
                onClick={() => {
                  setLogin(true);
                  setSignUp(false);
                }}
              >
                Login
              </a>
            </p>
            <p className="p_perin"> {response} </p>
          </div>
          <div className="div_perin name_home">
            <label className="label_perin" htmlFor="">
              Name
            </label>
            <br />
            <input
              onChange={(e) => {
                SetFN(e.target.value);
              }}
              className="input_perin"
              required={true}
              type="text"
              name="name"
            />
          </div>
          <div className="div_perin gender">
            <label>Gender</label>

            <select onChange={(e) => SetGR(e.target.value)}>
              <option value="male"></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="div_perin email">
            <label className="label_perin" htmlFor="">
              Email (Institute ID preferred)
            </label>
            <br />
            <input
              onChange={(e) => SetML(e.target.value)}
              className="input_perin"
              name="email"
              required={true}
              type="email"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Password
            </label>
            <br />
            <input
              onChange={(e) => SetPD(e.target.value)}
              className="input_perin"
              name="password"
              required={true}
              type="password"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Re-enter Password
            </label>
            <br />
            <input
              onChange={(e) => SetCPD(e.target.value)}
              className="input_perin"
              required={true}
              type="password"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Contact Number
            </label>
            <br />
            <input
              onChange={(e) => SetMN(e.target.value)}
              className="input_perin"
              required={true}
              type="number"
              name="number"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Name of the Institute
            </label>
            <br />
            <input
              onChange={(e) => SetIN(e.target.value)}
              className="input_perin"
              name="institute"
              required={true}
              type="text"
            />
          </div>
          <div className="div_perin password">
            <label className="label_perin" htmlFor="">
              Proof of Enrollment in Institute (Please upload either Jpg or Png
              file with filesize less than 2MB)
            </label>
            <br />
            <input
              //   onChange={handleFileChange}
              onChange={(e) => SetProof(e.target.files[0])}
              className="input_perin"
              name="proof"
              required={true}
              type="file"
            />
          </div>
          <div className="div_perin password">
            <br />
            <input
              onClick={(e) => SetCheckbox(true)}
              className="checkbox_perin"
              required={true}
              type="checkbox"
              name="checkbox"
            />
            <label className="" htmlFor="">
              I hereby declare that all the information provided by me are
              correct. I also agree to follow all the guidelines of the fest and
              agree to the fact that in case of any discrepancy, the decision of
              the organizers will be final and binding.
            </label>
          </div>
          <div className="div_perin">
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </Wrap>
    </Backdrop>
  );
}

export default SignUp;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background-color: rgba(7, 7, 7, 0.75);
  z-index: 2;
  font-family: "bujji", sans-serif;
`;
const Wrap = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: auto;
  margin: auto;
  position: relative;
  color: white;
  padding: 40px 0px;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;

  background: rgba(19, 105, 198, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 667px) {
    position: none;
    width: 328px;
    margin-top: 28px;
    margin-bottom: 28px;

    .close_sign_up_button {
      width: 15px;
      height: 15px;
    }
  }

  .div_perin {
    overflow: auto;

    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 80px;
    padding-right: 80px;
    .label_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);

      @media (max-width: 667px) {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
        margin: 0px;
      }
    }
    .input_perin {
      width: 100%;
      height: 46px;
      border-radius: 5px;

      @media (max-width: 667px) {
        width: 280px;
        height: 25px;
      }
    }

    .input_file {
      font-size: 16px;
      padding-top: 6px;
      @media (max-width: 667px) {
        font-size: 10px;
        padding: 0;
      }
    }

    .input_perin:focus-visible {
      outline: none;
    }

    .checkbox_perin {
      width: 25px;
      height: 25px;

      @media (max-width: 667px) {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
        width: 15px;
        height: 15px;
      }
    }

    @media (max-width: 667px) {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
  button {
    margin: auto;
    display: flex;
    width: 150px;
    height: 55px;
    color: white;
    font-weight: 900;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #b2016b;
    border: 0px;
    margin-top: 20px;

    &:hover {
      background: transparent;
      border: 2px solid;
      border-image-slice: 1;
      border-image-source: linear-gradient(225deg, #b2016b, #1e149d);
    }

    @media (max-width: 667px) {
      width: 90px;
      height: 23px;
      font-size: 9px;
      font-weight: 900;
      line-height: 9px;
      letter-spacing: 0em;
      text-align: center;
      margin-top: 8px;
      margin-bottom: 50px;
    }
  }
  .heading_perin {
    text-align: center;
    line-height: 44px;

    @media (max-width: 667px) {
      padding-top: 20px;
    }

    .h2_perin {
      font-size: 45px;
      font-weight: 900;

      @media (max-width: 667px) {
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 0em;
        text-align: center;
        margin: 0;
        height: 15px;
      }
    }
    .p_perin {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 700;
      color: rgba(181, 176, 176, 1);

      @media (max-width: 667px) {
        font-family: Poppins;
        font-size: 10px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
        padding: auto;
        margin: 0px;
      }

      .a_perin {
        cursor: pointer;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        text-decoration: underline;
        color: #fc0198;
        font-weight: bold;

        @media (max-width: 667px) {
          font-family: Poppins;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0em;
          text-align: left;
        }
      }
    }
  }
`;
/* Line 2 */

const Close = styled(CloseIcon)`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  color: black;
  background-color: #dbdbdb;
  opacity: 0.7;
  cursor: pointer;
`;