import styled from 'styled-components';

function makeStyle(type, wth, hght, bgColor, direction, jC, aI, color){
const typeStyle = styled[type]`
  width: ${(props) => props === 'wth' ? wth : '100%'};
  height: ${(props) => props === 'hght' ? hght : '100%'};
  background-color: ${(props) => props === 'bgColor' ? bgColor : 'gold'};
  display: flex;
  flex-direction: ${(props) => props === 'direction' ? direction : 'flex-start'};
  justify-content: ${(props) => props === 'jC' ? jC : 'flex-start'};
  align-items: ${(props) => props === 'aI' ? aI : 'flex-start'};
  font-color: ${(props) => props === 'color' ? color : 'black'};
`
return typeStyle;
}
export default makeStyle;