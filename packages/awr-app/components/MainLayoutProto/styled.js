import styled from "styled-components";
export const Container = styled.div`
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;

  width: 100%;
  padding: 20px 0;

  box-shadow: 0 40px 50px #f3f3f2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 95%;

  margin-top: 40px;
`;
