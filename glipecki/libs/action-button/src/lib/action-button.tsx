import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ActionButtonProps {}

const StyledActionButton = styled.div`
  color: pink;
`;

export function ActionButton(props: ActionButtonProps) {
  return (
    <StyledActionButton>
      Klikaj mnie!
    </StyledActionButton>
  );
}

export default ActionButton;
