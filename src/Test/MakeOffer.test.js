import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MakeOffer from "../Routes/Business/MakeOffer/MakeOffer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MakeOffer />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
