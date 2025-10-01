import styled from "styled-components";
import { Box } from "./ui/Box";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Result = ({ result }) => {
  return (
    <Wrapper>
      {result !== null
        ? result.map((e, i) => {
            return <Box key={i} title={e.title} category={e.category} contents={e.contents} />;
          })
        : null}
    </Wrapper>
  );
};
