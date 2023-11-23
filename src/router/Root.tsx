import { Suspense } from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

function Root() {
  return (
    <Suspense
      fallback={
        <StyledProcessing>
          <div>loading...</div>
        </StyledProcessing>
      }
    >
      <Outlet />
    </Suspense>
  );
}

const StyledProcessing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export default Root;
