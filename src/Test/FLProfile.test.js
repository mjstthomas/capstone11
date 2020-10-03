import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import FLProfile from "../Routes/Freelance/FLProfile/FLProfile";
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
            work: [],
            skills: [{ level: "", skill: "" }],
          },
          userProfile: { id: null, profile: null },
          headerToggle: false,
          isNav: false,
          resultArray: [],
          resultProfiles: [],
          work: [],
          MustHaveSkills: [
            { level: "", skill: "" },
            { level: "", skill: "" },
            { level: "", skill: "" },
          ],
          // NiceToHaveSkills: [{ level: "", skill: "" }],
          AddSkills: [{ level: "", skill: "" }],
          error: "",
        }}
      >
        <FLProfile />
      </AppContext.Provider>
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
