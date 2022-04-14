import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  color: #202020;

  ul {
    display: flex;
    
    li + li::before {
      content: "/";
      margin: 0 10px;
    }
  }
`;
