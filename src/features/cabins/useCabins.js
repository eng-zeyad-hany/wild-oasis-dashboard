import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";

export default function useCabins() {
  const { data: cabins, isPending } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isPending, cabins };
}
