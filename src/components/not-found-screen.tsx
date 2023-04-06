import { jsx } from '@emotion/core';
import React from 'react';

import { Link } from './lib';

function NotFoundScreen() {
  return (
    <div className="not-found-screen-layout">
      <div>
        Sorry... nothing here. <Link to="/discover">Go home</Link>
      </div>
    </div>
  );
}

export { NotFoundScreen };
