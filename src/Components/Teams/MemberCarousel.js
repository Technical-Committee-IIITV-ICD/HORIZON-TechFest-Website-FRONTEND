import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MemberCard from "./MemberCard";

export default function EventsCarousel({ teamName }) {
  const length = teamName.firstName.length;
  let number_of_slides = length === 2 ? 1 : 2;
  console.log(teamName);

  const settings = {
    slidesToShow: number_of_slides,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Slider {...settings}>
        {teamName.firstName.map(function (firstName, index) {
          if (
            (length === 2 && index % 2 === 0) ||
            (index % 2 === 0 && index !== length - 1)
          )
            return (
              <Wrap className="perin">
                <UpperCard>
                  <MemberCard
                    firstName={teamName.firstName[index]}
                    lastName={teamName.lastName[index]}
                  />
                </UpperCard>
                <BottomCard>
                  <MemberCard
                    firstName={teamName.firstName[index + 1]}
                    lastName={teamName.lastName[index + 1]}
                  />
                </BottomCard>
              </Wrap>
            );
          else {
            if (index === length - 1 && length % 2 !== 0) {
              console.log("hello");
              return (
                <Wrap className="perin">
                  <UpperCard>
                    <MemberCard
                      firstName={teamName.firstName[index]}
                      lastName={teamName.lastName[index]}
                    />
                  </UpperCard>
                </Wrap>
              );
            }
          }
        })}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 820px) {
    width: 80%;
    margin: auto;
    padding-top: 80px;
  }
  @media (max-width: 667px) {
    width: 80%;
    margin: auto;
    padding-top: 36px;
  }
`;
const Wrap = styled.div``;
const UpperCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  height: 298px;

  @media (max-width: 820px) {
    height: 270px;
    margin-bottom: 30px;
  }
  @media (max-width: 667px) {
    height: 117px;
    margin-bottom: 30px;
  }
`;
const BottomCard = styled.div`
  display: flex;
  justify-content: center;
  height: 298px;

  @media (max-width: 820px) {
    height: 298px;
  }
  @media (max-width: 667px) {
    height: 125px;
  }
`;