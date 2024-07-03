import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth.js";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    // only pass one element to that function so use {} to destructure the data and pass it to fn
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("user information successfully updated");
      void queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return { updateUser, isUpdating };
}
