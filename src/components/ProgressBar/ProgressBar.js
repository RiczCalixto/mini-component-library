import React from "react";

import VisuallyHidden from "../VisuallyHidden";
import { PbBaseStyled, PbContentStyled } from "./ProgressBar.styled";

const ProgressBar = ({ value, size }) => {
  return (
    <PbBaseStyled size={size}>
      <PbContentStyled value={value} />
    </PbBaseStyled>
  );
};

export default ProgressBar;
