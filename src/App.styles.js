import styled from 'styled-components';
import { COLOR } from './constants/style';

const AppWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${COLOR.MAIN.WHITE};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  min-height: 100%;
  padding: 20px;
  box-shadow: 1px 1px 1px ${COLOR.KEYBOARD.BORDER};
  margin: 0 auto;
`;

export default AppWrapper;
