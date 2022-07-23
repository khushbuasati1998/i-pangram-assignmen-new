import React from 'react';
import loadable from '@loadable/component';

// load @mui material components
const Grid = loadable(() => import('@mui/material/Grid'));
const FormLabel = loadable(() => import('@mui/material/FormLabel'));
const FormControlLabel = loadable(() => import('@mui/material/FormControlLabel'));
const Radio = loadable(() => import('@mui/material/Radio'));
const RadioGroup = loadable(() => import('@mui/material/RadioGroup'));

interface Props {
    title: string;
    radioOptionList: any[];
    radioValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RowRadioButtonsGroup = ({ title, radioOptionList, radioValue, onChange }: Props) => {
    return (
        <Grid
            container={true}
            alignItems="center"
            direction="row"
            justifyContent="flex-start"
            sx={{ marginBottom: '0.5rem' }}
        >
            <Grid xs={12} sm={12} md={4} item={true}>
                <FormLabel sx={{ color: '#464444' }}>{title}</FormLabel>
            </Grid>
            <Grid xs={12} sm={12} md={6} item={true}>
                <RadioGroup
                    row={true}
                    value={radioValue}
                    onChange={onChange}
                >
                    {
                        radioOptionList && radioOptionList.length ?
                            radioOptionList.map((item: any) => (
                                <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                            ))
                            : null
                    }
                </RadioGroup>
            </Grid>
        </Grid>
    );
}
export default RowRadioButtonsGroup; 
