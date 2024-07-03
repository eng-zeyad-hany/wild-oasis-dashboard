import { useUser } from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user

  const { isPending, isAuthenticated } = useUser();
  // 2. while loading, show a spinner
  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login");
  }, [navigate, isPending, isAuthenticated]);
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 3. if there is No authenticated use, redirect
  // to the login

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}
export default ProtectedRoute;
