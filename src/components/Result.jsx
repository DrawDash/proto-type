import styled from "styled-components";
import { Box } from "./ui/Box";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Result = () => {
  return (
    <Wrapper>
      <Box title={"title"} category={"category"} contents={"contents"} />
    </Wrapper>
  );
};
