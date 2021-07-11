import React from "react";
import styled from "styled-components";

import { COLORS } from "../../helpers/colors";
import Section from "../../components/UI/Section/Section";
const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 1fr;
`;
const Heading = styled.h1`
  padding: 0px;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${COLORS.Weeper.hex};
`;
const Name = styled.h1`
  margin: 0px 0px 0px 0px;
  padding: 0px;
  color: ${COLORS.Cheesy.hex};
  font-weight: 800;
  font-size: 60pt;
`;

const InputBox = styled.div`
  width: ${(props) => props.width};
`;

const Input = styled.input`
  width: 100%;
  height: 5vh;
  border-radius: 2vh;
  background-color: rgba(${COLORS.Arrival.rgb}, 0.4);
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
const Text = styled.p`
  margin-left: 1vw;
`;
const Inputs = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;
const Line = styled.div`
  width: ${(props) => props.width};
  height: 6px;
  background: ${COLORS.Cheesy.hex};
  transform: rotate(-2deg);
  margin-left: 4vw;
  margin-top: 1vh;
  margin-bottom:14vh;
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
  border-radius: 16px;
  font-size: 14pt;
  font-weight: 400;
`;
const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  align-items:center;
`;
const Auth = () => {
  return (
    <Wrapper>
      <Section
        direction="column"
        start="1"
        end="2"
        columnstart="1"
        columnend="2"
        background={COLORS.Weeper.hex}
        align="center"
        justify="center"
      >
        <Name>Ztraid.</Name>
      </Section>
      <Section
        direction="column"
        align="normal"
        justify="normal"
        start="1"
        end="2"
        columnstart="2"
        columnend="3"
        background={COLORS.Zealot.hex}
      >
        <Heading color={COLORS.Weeper.hex} margin="4vh 0px 0vh 5vw" size="33pt">
          Join us.
        </Heading>
        <Line width="210px" />
        <Container>
        <Inputs>
          <InputBox width="45%">
            <Text>Firstname</Text>
            <Input value="John" />
          </InputBox>
          <InputBox width="45%">
            <Text>Lastname</Text>
            <Input value="Doe" />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox width="100%">
            <Text>Email</Text>
            <Input value="Example@example.com" />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox width="100%">
            <Text>Password</Text>
            <Input value="*****" />
          </InputBox>
        </Inputs>
        <Inputs>
          <InputBox width="100%">
            <Text>Password again</Text>
            <Input value="*****" />
          </InputBox>
        </Inputs>
        <Btn
          margin="7vh 0 0 20vw"
          width="10vw"
          height="5vh"
          background={COLORS.Cheesy.hex}
          color={COLORS.Zealot.hex}
          onClick={() => alert('save')}
        >
          Sign up
        </Btn>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Auth;
