import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings.js";

function useTodayActivity() {
  const { isPending, data: activities } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["today-activity"],
  });
  return { isPending, activities };
}
export default useTodayActivity;
