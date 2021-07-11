import React from "react";
import styled from "styled-components";

import Back from '../../../icons/back.svg';

import { COLORS } from "../../../helpers/colors";
import { useLocation, useHistory } from "react-router-dom";

const Wrapper = styled.div`
  display:flex;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: ${COLORS.Weeper.hex};
  align-items:center;
  justify-content: space-between;
`;
const Name = styled.h1`
  margin: 0px 0px 0px 3vw;
  padding: 0px;
  color: ${COLORS.Cheesy.hex};
  font-weight: 800;
  font-size:33pt;
`;
const Btn = styled.div`
  cursor: pointer;
  color: ${props => props.color};
  width: ${props => props.path ? `auto` : `25px`};
  font-size: 14pt;
  font-weight: 400;
`;
const Buttons = styled.div`
  display:flex;
  flex-direction:row;
  margin-right:4vw;
  width: ${props => props.path ? `10%` : `auto`};
  justify-content: space-between;
`;
const Icon = styled.img`
  width:100%;
`;
const Header = ({scrollToSignup, loginHandler, isLoginScreen}) => {
  const location = useLocation();
  let history = useHistory();
  const goToStart = () => {
    history.push("/");
  };
  const goToAuth = () => {
    history.push('/auth');
  }
  return (
    <Wrapper>
      <Name>Ztraid.</Name>
      {location.pathname == '/' ? <Buttons path={location.pathname == '/' ? true : false}><Btn color={COLORS.Zealot.hex} path={location.pathname == '/' ? true : false} onClick={scrollToSignup}>Sign up</Btn><Btn onClick={loginHandler} color={COLORS.Cheesy.hex} path={location.pathname == '/' ? true : false}>Log in</Btn></Buttons> : <Buttons path={location.pathname == '/' ? true : false}><Btn path={location.pathname == '/' ? true : false} onClick={goToStart}><Icon src={Back} /></Btn></Buttons>}
    </Wrapper>
  );
};
export default Header;
