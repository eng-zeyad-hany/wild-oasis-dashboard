import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner.jsx";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking.js";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout.js";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useDeleteBooking } from "./useDeleteBooking.js";
import Modal from "../../ui/Modal.jsx";
import ConfirmDelete from "../../ui/ConfirmDelete.jsx";
import Empty from "../../ui/Empty.jsx";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isPending } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  if (isPending) return <Spinner />;
  if (!booking) return <Empty resource={"booking"} />;

  const { id: bookingId, status } = booking;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-out": "silver",
    "checked-in": "green",
  };
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            onClick={() => {
              checkout(bookingId);
            }}
            disabled={isCheckingOut}
            icon={<HiArrowUpOnSquare />}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens={"confirm-delete"}>
            <Button variation={"danger"}>Delete</Button>
          </Modal.Open>
          <Modal.Window name={"confirm-delete"}>
            <ConfirmDelete
              resourceName={"bookings"}
              onConfirm={() => {
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                });
              }}
              disabled={isDeletingBooking}
              onCloseModal={close}
            ></ConfirmDelete>
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
