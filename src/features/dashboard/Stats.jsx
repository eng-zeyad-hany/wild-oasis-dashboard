import Stat from "./Stat.jsx";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers.js";

function Stats({ confirmedStays, cabins, bookings, stays, numDays }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const checkins = confirmedStays.length;
  const cabinsCount = cabins.length;
  // occupation rate is num checked in nights/ all available nights
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title={"bookings"}
        icon={<HiOutlineBriefcase />}
        color={"blue"}
        value={numBookings}
      />

      <Stat
        title={"sales"}
        icon={<HiOutlineBanknotes />}
        color={"green"}
        value={formatCurrency(sales)}
      />
      <Stat
        title={"check ins"}
        icon={<HiOutlineCalendarDays />}
        color={"indigo"}
        value={checkins}
      />
      <Stat
        title={"occupancy rate"}
        icon={<HiOutlineChartBar />}
        color={"yellow"}
        value={Math.round(occupation * 100).toFixed(1) + "%"}
      />
    </>
  );
}
export default Stats;
