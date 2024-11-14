import { css } from "styled-components";

const fontGenerator = (
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => css`
  font-family: "Wanted Sans";
  font-weight: ${weight};
  font-size: ${size}rem;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}px;
`;

const font = {
  H1: fontGenerator(700, 2.5, 140, -0.8),
  H2: fontGenerator(700, 2, 140, -0.04),
  H3: fontGenerator(700, 1.5, 160, -0.03),

  B1: fontGenerator(400, 1.25, 160, 0.0125),
  B2: fontGenerator(400, 1.125, 160, 0.01125),
  B3: fontGenerator(400, 1, 160, 0.01),
  B4: fontGenerator(400, 0.875, 160, 0.00875),

  Heading1: fontGenerator(600, 2.5, 140, -0.05),
  Heading2: fontGenerator(600, 1.75, 160, -0.035),
  Heading3: fontGenerator(600, 1.125, 120, -0.01125),
  Heading4: fontGenerator(600, 1, 120, 0.01),
  Heading5: fontGenerator(600, 0.875, 160, 0.00875),
};

export default font;
