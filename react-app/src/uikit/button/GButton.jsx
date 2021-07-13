import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const GButton= ({ loading, children, ...rest }) => (
    <Button disabled={loading} {...rest}>
        {
            loading
                ? <CircularProgress color="inherit" size={16} />
                : children
        }
    </Button>
);

export default GButton;
