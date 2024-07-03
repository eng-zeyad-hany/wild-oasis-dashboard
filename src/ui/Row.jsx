import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      align-items: center;
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
Row.defaultProps = {
  // define default props to component
  type: "vertical",
};
export default Row;
