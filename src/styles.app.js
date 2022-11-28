import styled from "styled-components";

export const Base = styled.div`
  display: flex;
`;

export const Container = styled(Base)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const Half = styled(Base)`
  flex: 1;
  height: 100%;
`;

export const RightHalf = styled(Half)`
  background-color: #f55c79;
`;

export const LeftHalf = styled(Half)`
  align-items: center;
  justify-content: center;
  background-color: #74baff;
`;
