import styled from "styled-components";
import UsersAvatar from "../features/authentication/UserAvatar.jsx";
import HeaderMenu from "./HeaderMenu.jsx";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
      <UsersAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
export default Header;
