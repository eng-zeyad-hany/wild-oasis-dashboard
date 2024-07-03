import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth.js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isCurrentlyTryToLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      toast.success("you are successfully logged in");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: () => {
      toast.error("check your email or password");
    },
  });
  return { login, isCurrentlyTryToLogin };
}
