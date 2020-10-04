import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Messaging from "../Routes/Messaging/Messaging";
import AppContext from "../AppContext";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AppContext.Provider
        value={{
          user: {
            id: null,
            nickname: "",
            profile: { id: null, profile: null },

            skills: [{ level: "", skill: "" }],
          },
          userProfile: { id: null, profile: null },
          headerToggle: false,
          isNav: false,
          resultArray: [],
          resultProfiles: [],

          MustHaveSkills: [
            { level: "", skill: "" },
            { level: "", skill: "" },
            { level: "", skill: "" },
          ],

          AddSkills: [{ level: "", skill: "" }],
          error: "",
        }}
      >
        <Messaging />
      </AppContext.Provider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
