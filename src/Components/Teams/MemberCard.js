import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function MemberCard({ firstName, lastName }) {
  return (
    <Container>
      <MemberDetails>
        <img className="member_image" src="/images/member_image.png" alt="" />
        <h3 className="member_fName">{firstName}</h3>
        <h3 className="member_lName">{lastName}</h3>
        <Image>
          <LinkedInIcon className="lin_icon" />
          <EmailIcon className="email_icon" />
        </Image>
      </MemberDetails>
    </Container>
  );
}

export default MemberCard;

const Container = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(225deg, #d12d2d, #1e149d);
  width: 208px;
  height: 280px;

  @media (max-width: 820px) {
    width: 172px;
    height: 231px;
  }
  @media (max-width: 667px) {
    width: 87px;
    height: 117px;
  }
`;
const MemberDetails = styled.div`
  display: flex;
  align-items: center;
  ${"" /* justify-content: center; */}
  flex-direction: column;
  border: 2px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(225deg, #d12d2d, #1e149d);
  position: relative;
  right: -15px;
  width: 208px;
  height: 280px;
  bottom: -15px;
  .member_image {
    padding-left: 17px;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 34px;
    width: 100%;
    height: 50%;
  }
  .member_fName,
  .member_lName {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    font-weight: 400;
  }

  @media (max-width: 820px) {
    width: 172px;
    height: 231px;
    right: -12.5px;
    bottom: -12.5px;

    .member_image {
      padding-left: 14px;
      padding-top: 14px;
      padding-bottom: 14px;
      padding-right: 28px;
    }

    .member_fName,
    .member_lName {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
  @media (max-width: 667px) {
    width: 87px;
    height: 117px;
    right: -6px;
    bottom: -6px;

    .member_image {
      padding-left: 8px;
      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 17px;
    }

    .member_fName,
    .member_lName {
      font-family: Poppins;
      font-size: 8px;
      font-weight: 400;
      line-height: 5px;
      letter-spacing: 0em;
      text-align: center;
    }
  }
`;
const Image = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    padding-top: 3px;
    .lin_icon,
    .email_icon {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 3px;
    .lin_icon,
    .email_icon {
      width: 10px;
      height: 10px;
    }
  }
`;