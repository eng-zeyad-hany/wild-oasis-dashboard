import styled from "styled-components";

const StyledFormRowVertical = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0.5rem;
`;
const Label = styled.label`
  font-weight: 500;
`;
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ children, label, error }) {
  return (
    <StyledFormRowVertical>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
}
export default FormRowVertical;
