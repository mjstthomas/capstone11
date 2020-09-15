import React from "react";

const AppContext = React.createContext({
  AddSkills: [{}],
  MustHaveSkills: [{}],
  NiceToHaveSkills: [{}],
  setLevel: () => {},
  setSkill: () => {},
  addSkill: () => {},
  removeSkill: () => {},
});

export default AppContext;
