import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import { useRecentStays } from "./useRecentStays.js";
import Stats from "./Stats.jsx";
import useCabins from "../cabins/useCabins.js";
import SalesChart from "./SalesChart.jsx";
import DurationChart from "./DurationChart.jsx";
import TodayActivity from "../check-in-out/TodayActivity.jsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings = [], isPending: isPendingBookings } = useRecentBookings();
  const {
    stays = [],
    confirmedStays = [],
    isPending: isPendingStays,
    numDays,
  } = useRecentStays();
  const { cabins, isPending: isPendingCabins } = useCabins();
  if (isPendingBookings && isPendingStays && isPendingCabins) {
    return <Spinner />;
  }
  return (
    <StyledDashboardLayout>
      <Stats
        stays={stays}
        confirmedStays={confirmedStays}
        bookings={bookings}
        numDays={numDays}
        cabins={cabins}
      ></Stats>
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
