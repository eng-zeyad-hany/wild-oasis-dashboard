import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSetting from "./useSetting.js";
import Spinner from "../../ui/Spinner.jsx";
import useUpdateSetting from "./useUpdateSetting.js";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingsLength,
      maxBookingsLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting();

  const { isUpdating, updateSetting } = useUpdateSetting();
  if (isLoading) return <Spinner />;
  function handleUpdate(e, fieldName) {
    const { value } = e.target;
    if (!value) return;

    updateSetting({ [fieldName]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingsLength}
          onBlur={(e) => handleUpdate(e, "minBookingsLength")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingsLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingsLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
