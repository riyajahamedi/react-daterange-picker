import React, { useState } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./styles.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import "bootstrap/dist/css/bootstrap.css";
// you will also need the css that comes with bootstrap-daterangepicker
import "bootstrap-daterangepicker/daterangepicker.css";

function App() {
  const [dates, setDatesState] = useState({
    startDate: "",
    endDate: ""
  });

  const setDates = (e, { startDate, endDate }) => {
    setDatesState({
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD")
    });
  };

  const ranges = {
      Today: [moment(), moment()],
      Yesterday: [
        moment().subtract(1, "days"),
        moment().subtract(1, "days")
      ],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [
        moment()
          .subtract(1, "month")
          .startOf("month"),
        moment()
          .subtract(1, "month")
          .endOf("month")
      ]
    };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {dates.startDate} - {dates.endDate}
      <br />
      <DateRangePicker
        onApply={setDates}
        initialSettings={{ startDate: '08/20/2022', endDate: '08/28/2022', ranges: ranges }}
      >
        <input
          type="text"
          value={dates.startDate + "-" + dates.endDate}
          className="form-control"
        />
      </DateRangePicker>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
