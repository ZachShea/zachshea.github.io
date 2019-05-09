/**
 * @providesModule Size
 */

import React from 'react';
import Responsive from 'react-responsive';

const Size = {
    Desktop: props => <Responsive {...props} minWidth={992} />,
    Tablet: props => <Responsive {...props} minWidth={720} maxWidth={991} />,
    Default: props => <Responsive {...props} maxWidth={991} />,
    Large: props => <Responsive {...props} minWidth={720} />,
    Mobile: props => <Responsive {...props} maxWidth={719} />,

    NotTiny: props => <Responsive {...props} minWidth={414} />,
    Tiny: props => <Responsive {...props} maxWidth={413} />
};

export default Size;