import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth.js";

export function useUser() {
  const {
    isPending,
    data: user,
    error,
  } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });
  return {
    user,
    isPending,
    error,
    isAuthenticated: user?.role === "authenticated",
  };
}
