import React, { useState } from "react";
import loadable from '@loadable/component';
import makeStyles from '@mui/styles/makeStyles';
import defaultFormDetails from './utils/defaultFormDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// load @mui material components
const Button = loadable(() => import('@mui/material/Button'));
const Grid = loadable(() => import('@mui/material/Grid'));
const IconButton = loadable(() => import('@mui/material/IconButton'));

// load required component
const FormDetails = loadable(() => import('./form'));
const Summary = loadable(() => import('./summary'));

const MainScreen = (props: any) => {

    const classes = useStyles();

    // summary details
    const [formDetailsList, setFormDetailsList] = useState(defaultFormDetails);

    const [showHideSummary, setShowHideSummary] = useState(false);

    const updateSummaryDetails = (details: any, index: number) => {
        const updatedList: any = JSON.parse(JSON.stringify(formDetailsList));
        updatedList[index] = details;
        setFormDetailsList(updatedList);
    };

    const addForms = () => {
        const updatedList: any = JSON.parse(JSON.stringify(formDetailsList));
        updatedList.push(defaultFormDetails[0]);
        setFormDetailsList(updatedList);
    }

    return (
        <Grid
            container={true}
            alignItems="center"
            direction="column"
            justifyContent="center"
            sx={{ padding: '0px 2rem' }}
        >
            {
                formDetailsList.length ?
                    formDetailsList.map((item: any, index: number) => (
                        <>
                            {showHideSummary ?
                                <Summary details={item} index={index} />
                                : <FormDetails
                                    details={item}
                                    index={index}
                                    updateSummaryDetails={updateSummaryDetails} />
                            }
                        </>
                    ))
                    : null
            }
            {
                !showHideSummary ?
                    <Grid item={true} sx={{ marginTop: '-26px' }}>
                        <IconButton onClick={addForms}>
                            <AddCircleIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Grid>
                    : null
            }
            <Grid item={true}>
                <Button
                    variant="contained"
                    className={classes.btnRoot}
                    onClick={() => setShowHideSummary(false)}
                    disabled={!showHideSummary}
                >
                    BACk
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setShowHideSummary(true)}
                    className={classes.btnRoot}
                    disabled={showHideSummary}
                >
                    NEXT
                </Button>
            </Grid>
        </Grid>
    );
}
export default MainScreen;
const useStyles = makeStyles((theme: any) => ({
    btnRoot: {
        padding: '0.4rem 4rem !important',
        margin: '3rem 1rem !important',
        fontWeight: 'bold !important'
    }
}));