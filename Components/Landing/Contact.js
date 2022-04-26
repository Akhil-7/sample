import React, { useState } from "react";
import styled from "styled-components";

function Contact() {
  const [isCochin, setIsCochin] = useState(true);
  return (
    <ContactContainer isCochin={isCochin}>
      <p className="title">Contact Us</p>
      <p className="subtitle">
        <span>Drop Us a line</span>
        or give us headsup if you are interested in visiting us
      </p>
      <div className="buttons">
        <p
          className="button1 button mx-2"
          onClick={() => {
            setIsCochin(true);
          }}
        >
          Cochin
        </p>
        <p
          className="button2 button mx-2"
          onClick={() => {
            setIsCochin(false);
          }}
        >
          Always
        </p>
      </div>
      <FormContainer>
        <div className="row m-0">
          <div
            className={`left-part col-12 col-md-6 ${
              !isCochin ? "px-4" : ""
            }`}
          >
            <p className="key text-md-end">Email us at</p>
            <p className="value text-md-end">
              {isCochin ? "nfo@lcccochin.com" : "always@lcccochin.com"}
            </p>
            <p className="key text-md-end">Our Address</p>
            <p className="value text-md-end">
              {isCochin
                ? "3rd floor, Dharmodayam Bldgs Marine Drive, Cochin-31, Kerala"
                : "New other address"}
            </p>
            <div className="map-container"></div>
          </div>
          <div className="right-part col-12 col-md-6">
            <form
              className={`d-flex justify-content-center align-items-center flex-column ${
                !isCochin ? "mx-lg-5 px-lg-5" : ""
              }`}
            >
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
              <input type="text" placeholder="Email Address*" />
              <p className="small-title">Message</p>
              <textarea />
              <p className="submit-button d-block mx-auto my-4">Send it</p>
            </form>
          </div>
        </div>
      </FormContainer>
    </ContactContainer>
  );
}
export default Contact;

const ContactContainer = styled.div`
  background-color: var(--secondary);
  padding: 100px 0;
  color: #fff;
  text-align: center;

  .title {
    font-size: 35px;
    letter-spacing: 5px;
    font-family: "IM Fell Double Pica", serif;
  }
  .subtitle {
    margin-top: 50px;
    font-size: 17px;
    line-height: 30px;
    letter-spacing: 3px;
    span {
      display: block;
    }
  }
  .buttons {
    margin-top: 100px;
    display: flex;
    width: 100%;
    justify-content: center;

    .button {
      padding: 10px 20px;
      border-radius: 5px;
      letter-spacing: 2px;
      font-weight: bolder;
      margin: 0 10px;
      width: fit-content;
    }
    .button1 {
      background-color: ${({ isCochin }) =>
        isCochin ? "#ffffff" : "transparent"};
      color: ${({ isCochin }) => (isCochin ? "var(--secondary)" : "#fff")};
      border: ${({ isCochin }) =>
        isCochin ? "1px solid transparent" : "1px solid #fff"};

      cursor: pointer;
    }
    .button2 {
      background-color: ${({ isCochin }) =>
        isCochin ? "transparent" : "#fff"};
      color: ${({ isCochin }) => (isCochin ? "#fff" : "var(--secondary)")};
      border: ${({ isCochin }) =>
        isCochin ? "1px solid #fff" : "1px solid transparent"};

      cursor: pointer;
    }
  }
`;
const FormContainer = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: center;
  .left-part {
    .key {
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 5px;
    }
    .value {
      font-size: 13px;
      letter-spacing: 2px;
      opacity: 0.8;
      margin-bottom: 20px;
    }
  }
  .right-part {
    input,
    textarea {
      display: block;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #fff;
      width: 300px;
      outline: none;
      padding: 10px;
      color: #fff;
      ::placeholder {
        color: #fff;
        opacity: 0.9;
        font-size: 13px;
        letter-spacing: 2px;
      }
    }
    textarea {
      border: 1px solid #fff;
      resize: none;
      height: 150px;
    }
    .small-title {
      margin: 10px;
      opacity: 0.9;
      font-size: 16px;
      letter-spacing: 2px;
    }
    .submit-button {
      padding: 8px 20px;
      border-radius: 5px;
      letter-spacing: 2px;
      width: fit-content;
      border: 1px solid #fff;
      margin-top: 20px;
      margin-left: auto;
      cursor: pointer;
    }
  }
`;
