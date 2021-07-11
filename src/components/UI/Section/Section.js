import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction:${props => props.direction};
  align-items:${props => props.align};
  justify-content:${props => props.justify};
  grid-column-start: ${props => props.columnstart};
  grid-column-end: ${props => props.columnend};
  grid-row-start: ${props => props.start};
  grid-row-end: ${props => props.end};
  background-color: ${props => props.background};
`;
const Section = ({start, end, columnend, columnstart, background, align, justify, direction, children}) => {
  return (
    <Wrapper start={start} end={end} background={background} align={align} justify={justify} direction={direction} columnstart={columnstart} columnend={columnend}>
      {
        children
      }
    </Wrapper>
  )
};

export default Section;
