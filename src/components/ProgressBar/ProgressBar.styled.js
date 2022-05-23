import styled, { css } from "styled-components";

import { COLORS } from "../../constants";

const sizeModifier = {
  small: "height: 8px",
  medium: "height: 12px",
  large: "height: 24px; padding: 4px;",
};

export const PbBaseStyled = styled.div`
  ${({ size = sizeModifier.small }) => css`
    background-color: ${COLORS.gray50};
    border-radius: 8px;
    max-width: 20rem;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    ${sizeModifier[size]};
  `};
`;

export const PbContentStyled = styled.div`
  ${({ value = 0 }) => css`
    background-color: ${COLORS.primary};
    ${value !== 100
      ? `border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;`
      : `border-radius:8px;`}
    width: ${value + "%"};
    height: 100%;
  `};
`;
