import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

function KeyboardDatePickers(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>

      <KeyboardDatePicker
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="yyyy/MM/dd"
      />
    </Fragment>
  );
}

export default KeyboardDatePickers;