import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import Back from "../../icons/back.svg";
import Header from "../../components/UI/Header/Header";
import Section from "../../components/UI/Section/Section";

import { useHistory } from "react-router-dom";

import { COLORS } from "../../helpers/colors";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 12vh 88vh 100vh 100vh;
`;
const Heading = styled.h1`
  padding: 0px;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${props => props.weight};
  
`;
const Paragraph = styled.div`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  padding: 0px;
  text-align: ${(props) => props.align};
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  border-radius: 10px;
  font-size: 14pt;
  font-weight: 600;
`;
const Line = styled.div`
  width: ${(props) => props.width};
  height: 6px;
  background: ${COLORS.Cheesy.hex};
  transform: rotate(-2deg);
  margin-left: 3vw;
  margin-top: 1vh;
`;
const Article = styled.article`
  width: ${(props) => props.width};
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Aside = styled.div`
  width: 30vw;
  height: 100%;
  background-color: ${COLORS.Zealot.hex};
  transition: opacity 1000ms ease-in-out;
`;
const Icon = styled.img`
  width: 100%;
`;
const Text = styled.p`
  margin-left: 1vw;
  color: ${COLORS.Weeper.hex};
`;
const Inputs = styled.div`
  display: flex;
  width: 87%;
  justify-content: space-between;
  margin-top: ${(props) => props.top};
`;
const InputBox = styled.div`
  width: ${(props) => props.width};
`;
const Input = styled.input`
  width: 100%;
  height: 5vh;
  border-radius: 2vh;
  background-color: ${COLORS.Arrival.hex};
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  padding-left: 1.5vw;
  &:focus {
    outline: none;
  }
`;
const LoginScreen = styled.div`
  display:flex;
  flex-direction:column;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.Weeper.hex};
`;
const LoginInput = styled.input`
width: 20vw;
height: 5vh;
border-radius: 2vh;
background-color: ${COLORS.Arrival.hex};
border: none;
background-image: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding-left: 1.5vw;
&:focus {
  outline: none;
}
`;
const Home = () => {
  const signupRef = useRef(null);
  let history = useHistory();
  const [creatorSignup, setCreatorSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUpHeading, setSignUpHeading] = useState("Become a Creator");
  const [animate, setAnimate] = useState(false);
  const goToShop = () => history.push("/shop");
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const signUpHandler = useCallback(() => {
    setCreatorSignup(true);
  }, []);
  const scrollToSignup = () => {
    scrollToRef(signupRef);
    setSignUpHeading("Join Us");
  };
  const loginHandler = () => {
    setLogin((prev) => !prev);
  };
  const duration = 300;
  const defaultStyle = {
    transition: `0.2s`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  return (
    <Wrapper>
      {login ? (
        <LoginScreen>
          <Heading weight="800" size="33pt" color={'#E1AE6A'} margin="3vh 0px 0px 3vw">Ztraid.</Heading>
          <LoginInput type="text" value="" placeholder="Email"/>
          <LoginInput type="password" value="" placeholder="Password" />
        </LoginScreen>
      ) : null}
      <Header scrollToSignup={scrollToSignup} loginHandler={loginHandler} />
      <Section
        start="2"
        end="3"
        background={COLORS.Weeper.hex}
        justify="normal"
        align="center"
        direction="column"
      >
        <Heading margin="20vh 0 0 0" size="33pt" color={COLORS.Arrival.hex}>
          Lorem ipsum lorem ipsum lorem
        </Heading>
        <Heading margin="2vh 0 0 0" size="26pt" color={COLORS.Arrival.hex}>
          lorem ipsum lorem lorem
        </Heading>
        <Btn
          margin="8vh 0 0 0"
          width="10vw"
          height="5vh"
          background={COLORS.Cheesy.hex}
          color={COLORS.Zealot.hex}
          onClick={goToShop}
        >
          Shop
        </Btn>
      </Section>
      <Section
        start="3"
        end="4"
        background={COLORS.Arrival.hex}
        direction="column"
      >
        <Article width="100%">
          <Heading margin="4vh 0 0 4vw" size="33pt" color={COLORS.Weeper.hex}>
            About us
          </Heading>
          <Line width="230px" />
          <Inner>
            <Heading margin="24vh 0 0 0" size="33pt" color={COLORS.Weeper.hex}>
              Lorem ipsum lorem lorem
            </Heading>
            <Paragraph
              margin="3vh 0 0 0"
              size="20pt"
              color={COLORS.Weeper.hex}
              align="center"
            >
              Lorem ipsum lorem lorem Lorem ipsum lorem lorem,
              <br /> lorem ipsum lorem. lorem lorem ipsum lorem. <br />
              lorem ipsum lorem lorem
            </Paragraph>
          </Inner>
        </Article>
      </Section>
      <Section
        start="4"
        end="5"
        background={COLORS.Arrival.hex}
        direction="row"
      >
        <Article width={creatorSignup ? "70%" : "100%"} ref={signupRef}>
          <Heading margin="4vh 0 0 4vw" size="33pt" color={COLORS.Weeper.hex}>
            {signUpHeading}
          </Heading>
          <Line width={signUpHeading === "Join Us" ? "190px" : "410px"} />
          <Inner>
            <Heading margin="24vh 0 0 0" size="33pt" color={COLORS.Zealot.hex}>
              Lorem ipsum lorem lorem
            </Heading>
            <Paragraph
              margin="3vh 0 0 0"
              size="20pt"
              color={COLORS.Weeper.hex}
              align="center"
            >
              Lorem ipsum lorem lorem Lorem ipsum lorem lorem,
              <br /> lorem ipsum lorem. lorem lorem ipsum lorem.
            </Paragraph>
            <Btn
              margin="5vh 0 0 0"
              width="10vw"
              height="5vh"
              background={COLORS.Cheesy.hex}
              color={COLORS.Zealot.hex}
              onClick={signUpHandler}
            >
              Sign up
            </Btn>
          </Inner>
        </Article>
        {creatorSignup ? (
          <Aside>
            <Btn
              margin="5vh 0 0 2vw"
              width="2vw"
              height="auto"
              background="none"
              color="none"
              onClick={() => setCreatorSignup(false)}
            >
              <Icon src={Back} />
            </Btn>
            <Inner>
              <Inputs top="5vh">
                <InputBox width="45%">
                  <Text>Firstname</Text>
                  <Input value="John" />
                </InputBox>
                <InputBox width="45%">
                  <Text>Lastname</Text>
                  <Input value="Doe" />
                </InputBox>
              </Inputs>
              <Inputs top="2vh">
                <InputBox width="100%">
                  <Text>Email</Text>
                  <Input value="example@example.com" />
                </InputBox>
              </Inputs>
              <Inputs top="2vh">
                <InputBox width="100%">
                  <Text>Password</Text>
                  <Input value="******" />
                </InputBox>
              </Inputs>
              <Inputs top="2vh">
                <InputBox width="100%">
                  <Text>Password (repeat)</Text>
                  <Input value="******" />
                </InputBox>
              </Inputs>
              <Btn
                margin="5vh 0 0 0"
                width="10vw"
                height="5vh"
                background={COLORS.Cheesy.hex}
                color={COLORS.Zealot.hex}
                onClick={() => setCreatorSignup(false)}
              >
                Sign up
              </Btn>
            </Inner>
          </Aside>
        ) : null}
      </Section>
    </Wrapper>
  );
};
export default Home;
