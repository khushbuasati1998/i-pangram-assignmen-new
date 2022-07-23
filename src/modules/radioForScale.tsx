import React from 'react';
import loadable from '@loadable/component';
import { scaleOptions } from './utils/radioOptionForDetails';

// load @mui material components
const Grid = loadable(() => import('@mui/material/Grid'));
const FormLabel = loadable(() => import('@mui/material/FormLabel'));
const FormControlLabel = loadable(() => import('@mui/material/FormControlLabel'));
const Radio = loadable(() => import('@mui/material/Radio'));
const RadioGroup = loadable(() => import('@mui/material/RadioGroup'));

interface Props {
    title: string;
    radioValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ScaleRadioBtn = ({ title, radioValue, onChange }: Props) => {
    return (
        <Grid
            container={true}
            alignItems="center"
            direction="row"
            justifyContent="center"
            sx={{ marginBottom: '0.5rem' }}
        >
            <Grid xs={12}item={true} sx={{ marginBottom: '1rem' }}>
                <FormLabel sx={{ color: '#464444' }}>{title}</FormLabel>
            </Grid>
            <Grid xs={12} item={true}>
                <RadioGroup
                    row={true}
                    value={radioValue}
                    onChange={onChange}
                >
                    {
                        scaleOptions && scaleOptions.length ?
                            scaleOptions.map((item: any) => (
                                <FormControlLabel
                                    labelPlacement="top"
                                    value={item.value}
                                    control={<Radio />}
                                    label={item.label}
                                />
                            ))
                            : null
                    }
                </RadioGroup>
            </Grid>
        </Grid>
    );
}
export default ScaleRadioBtn; 
