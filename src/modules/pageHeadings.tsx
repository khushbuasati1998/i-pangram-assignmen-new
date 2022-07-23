import React from "react";
import loadable from '@loadable/component';
import { paragraph1, paragraph2, paragraph3, paragraph4 } from './utils/staticParagraphs';

// @mui material components
const Typography = loadable(() => import('@mui/material/Typography'));
const Grid = loadable(() => import('@mui/material/Grid'));
const Box = loadable(() => import('@mui/material/Box'));
const Description = loadable(() => import('./pageDetails'));

const PageHeadingsAndDescriptions = (props: any) => {
    return (
        <Grid
            container={true}
            alignItems="center"
            direction="column"
            justifyContent="center"
        >
            <Typography
                sx={{
                    fontFamily: 'Sans-serif',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    margin: '1rem 0px 0.4rem',
                    color: '#268abb',
                    transition: 'color 0.3s ease 0s',
                    padding: '0px 0.7rem'
                }}
            >
                Pain & Functional Description
            </Typography>
            <Description paragraph={paragraph1} />
            <Description paragraph={paragraph2} />
            <Description paragraph={paragraph3} />
            <Box sx={{ height: '2rem' }} />
            <Description paragraph={paragraph4} />
            <Box sx={{
                height: '5rem', borderRadius: '4px', border: '1px solid #adacac',
                width: '97%', margin: '20px 0px 3rem'
            }} />
        </Grid>
    );
}
export default PageHeadingsAndDescriptions