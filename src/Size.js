/**
 * @providesModule Size
 */

import React from 'react';
import Responsive from 'react-responsive';

const Size = {
    Desktop: props => <Responsive {...props} minWidth={992} />,
    Tablet: props => <Responsive {...props} minWidth={720} maxWidth={991} />,
    Mobile: props => <Responsive {...props} maxWidth={719} />,

    Default: props => <Responsive {...props} maxWidth={991} />,

    Large: props => <Responsive {...props} minWidth={720} />,
    Small: props => <Responsive {...props} minWidth={414} maxWidth={719} />,
    Tiny: props => <Responsive {...props} maxWidth={413} />
};

export default Size;