import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings.js";
export default function useEditSetting(newSetting) {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isEditing } = useMutation({
    // only pass one element to that function so use {} to destructure the data and pass it to fn
    mutationFn: (newSetting) => updateSettingApi(newSetting),
    onSuccess: () => {
      toast.success("Cabin successfully edited");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateSetting, isEditing };
}
