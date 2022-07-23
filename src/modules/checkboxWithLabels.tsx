import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import loadable from '@loadable/component';
import Questions from './utils/questionsList';

// load @mui material components
const Grid = loadable(() => import('@mui/material/Grid'));
const FormControlLabel = loadable(() => import('@mui/material/FormControlLabel'));
const FormGroup = loadable(() => import('@mui/material/FormGroup'));
const Checkbox = loadable(() => import('@mui/material/Checkbox'));

interface Props {
    optionsList: any[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

const CheckboxWithLabels = ({ optionsList, onChange }: Props) => {
    return (
        <Grid
            container={true}
            direction="column"
            justifyContent="flex-start"
            sx={{ margin: '1rem 0px' }}
        >
            <FormLabel
                component="legend"
                sx={{ color: '#464444', marginBottom: '0.5rem' }}
            >
                {Questions[4]}
            </FormLabel>
            <FormGroup>
                {
                    optionsList && optionsList.length ?
                        optionsList.map((item: any, index: number) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={item.isSelected}
                                        onChange={(e: any) => onChange(e, index)}
                                        name={item.label}
                                    />
                                }
                                label={item.label}
                            />
                        ))
                        : null
                }
            </FormGroup>
        </Grid>
    );
}
export default CheckboxWithLabels;