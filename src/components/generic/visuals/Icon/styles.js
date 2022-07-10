// Third-party imports
import styled from "styled-components"
import { space, typography, color, layout } from "styled-system"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.black};
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    vertical-align: middle;
  }

  &&& {
    ${typography}
    ${color}
    ${space}
    ${layout}
  }
`
