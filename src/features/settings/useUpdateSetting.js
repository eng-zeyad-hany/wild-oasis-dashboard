import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings.js";
export default function useUpdateSetting(newSetting) {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    // only pass one element to that function so use {} to destructure the data and pass it to fn
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("setting successfully edited");

      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateSetting, isUpdating };
}
