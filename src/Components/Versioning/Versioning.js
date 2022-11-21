import React from 'react';
import packageJson from '../../../package.json';

const Versioning = () => {
    return (
        <div>
            App version number: {packageJson.version}
        </div>
    );
};

export default Versioning;