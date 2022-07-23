import React from "react";
import loadable from '@loadable/component';

// @mui material components
const Typography = loadable(() => import('@mui/material/Typography'));

interface Props {
    paragraph: string;
}

const Description = ({ paragraph }: Props) => (
    <Typography
        sx={{
            fontFamily: 'Sans-serif',
            fontSize: '1rem',
            color: '#464444',
            transition: 'color 0.3s ease 0s',
            padding: '0px 0.7rem'
        }}
    >
        {paragraph}
    </Typography>
);
export default Description;