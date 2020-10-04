import React from "react";

const AppContext = React.createContext({
  AddSkills: [{}],
  MustHaveSkills: [{}],
  setLevel: () => {},
  setSkill: () => {},
  addSkill: () => {},
  removeSkill: () => {},
});

export default AppContext;
