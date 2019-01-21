/**
 * @providesModule Size
 */

import React from 'react';
import Responsive from 'react-responsive';

const Size = {
    Desktop: props => <Responsive {...props} minWidth={992} />,
    Tablet: props => <Responsive {...props} minWidth={720} maxWidth={991} />,
    Mobile: props => <Responsive {...props} maxWidth={719} />,
    Default: props => <Responsive {...props} maxWidth={991} />
};

export default Size;