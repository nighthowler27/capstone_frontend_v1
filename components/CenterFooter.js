import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 auto;
  @media screen (max-width: 360px) {
    max-width: 400px;
    max-height: 700px;
    margin: 0;
    padding: 0 5px;
  }
`;

export default function CenterFooter({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}