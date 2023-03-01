import { jsx } from '@emotion/core';
import React from 'react';

import { Link } from '../components/bookshelf/reusableComponents';

function NotFoundScreen() {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/discover">Go home</Link>
      </div>
    </div>
  );
}

export { NotFoundScreen };
