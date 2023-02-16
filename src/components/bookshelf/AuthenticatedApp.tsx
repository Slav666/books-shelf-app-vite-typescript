import { jsx } from '@emotion/core';

import * as React from 'react';
import { Button } from './ReusableComponents';
// import * as mq from './styles/media-queries';
// import { DiscoverBooksScreen } from './discover';

function AuthenticatedApp({ user }) {
  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {user}
        <Button
          variant="secondary"
          style={{ marginLeft: '10px' }}
          // onClick={logout}
        >
          Logout
        </Button>
      </div>
      <div
        style={{
          margin: '0 auto',
          padding: '4em 2em',
          maxWidth: '840px',
          width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr 3fr',
          // [mq.small]: {
          //   gridTemplateColumns: '1fr',
          //   gridTemplateRows: 'auto',
          //   width: '100%',
          // },
        }}
      >
        {/* <DiscoverBooksScreen /> */}
      </div>
    </React.Fragment>
  );
}

export { AuthenticatedApp };
