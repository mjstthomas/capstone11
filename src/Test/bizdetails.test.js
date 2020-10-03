import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BizDetails from "../Routes/Business/BizProfileDetsForm/BizDetsForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <BizDetails />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
