import React, { useEffect, useState } from "react";
import loadable from '@loadable/component';
import { RadioOptions123, RadioOptions4, experienceCheckbox } from './utils/radioOptionForDetails';
import Questions from './utils/questionsList';
import { filter as _filter, pluck as _pluck } from 'underscore';

// load @mui material component
const Grid = loadable(() => import('@mui/material/Grid'));

const PageHeadingsAndDescriptions = loadable(() => import('./pageHeadings'));
const RowRadioButtonsGroup = loadable(() => import('./radioBtnWithLabel'));
const CheckboxWithLabels = loadable(() => import('./checkboxWithLabels'));
const ScaleRadioBtn = loadable(() => import('./radioForScale'));

export interface SummaryRowDetails {
    question: string;
    answer: string;
}

interface Props {
    details: {
        id: string;
        list: SummaryRowDetails[];
    };
    index: number;
    updateSummaryDetails: ({}, itemIndex: number) => void;
}

const FormDetails = ({ details, index, updateSummaryDetails }: Props) => {

    const { list, id } = details;

    // details radio questions values
    const [radio1Value, setRadio1Value] = useState(list[0].answer ?? '');
    const [radio2Value, setRadio2Value] = useState(list[1].answer ?? '');
    const [radio3Value, setRadio3Value] = useState(list[2].answer ?? '');
    const [radio4Value, setRadio4Value] = useState(list[3].answer ?? '');

    // details checkbox question value
    const [checkboxValuesList, setCheckboxValuesList] = useState(experienceCheckbox);

    // scale radio question value
    const [scaleRadioValue, setScaleRadioValue] = useState(list[5].answer ?? '');

    useEffect(() => {
        if (list[4].answer !== '') {
            getCheckboxList()
        }
    }, [list[4].answer]);

    useEffect(() => {
        init();
    }, [radio1Value, radio2Value, radio4Value, radio4Value, checkboxValuesList, scaleRadioValue]);

    const init = async () => {
        const selectedExperienceList: string = await getSelectedExperience();
        if (radio1Value !== '' || radio2Value !== '' || radio3Value !== '' || radio4Value !== ''
            || selectedExperienceList !== '' || scaleRadioValue !== '') {
            updateSummaryDetails({
                id,
                list: [
                    { question: Questions[0], answer: radio1Value },
                    { question: Questions[1], answer: radio2Value },
                    { question: Questions[2], answer: radio3Value },
                    { question: Questions[3], answer: radio4Value },
                    { question: Questions[4], answer: selectedExperienceList },
                    { question: Questions[5], answer: scaleRadioValue },
                ]
            }, index);
        }
    };

    const getSelectedExperience = () => {
        const filteredList: any = _filter(checkboxValuesList, (item: any) => item.isSelected === true);
        return _pluck(filteredList, 'label').toString();
    };

    const getCheckboxList = () => {
        if (getSelectedExperience() === list[4].answer) {
            return;
        }
        const arr: string[] = list[4].answer.split(',');
        const updatedList = checkboxValuesList.map((item: any) => {
            return {
                ...item,
                isSelected: arr.includes(item.label.trim())
            }
        });
        setCheckboxValuesList(updatedList);
    };

    const radio1HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio1Value((event.target as HTMLInputElement).value);
    };

    const radio2HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio2Value((event.target as HTMLInputElement).value);
    };

    const radio3HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio3Value((event.target as HTMLInputElement).value);
    };

    const radio4HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadio4Value((event.target as HTMLInputElement).value);
    };

    const scaleRadioHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setScaleRadioValue((event.target as HTMLInputElement).value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedList: any = JSON.parse(JSON.stringify(checkboxValuesList));
        updatedList[index].isSelected = !updatedList[index].isSelected;
        setCheckboxValuesList(updatedList);
    };

    return (
        <Grid
            container={true}
            alignItems="center"
            direction="column"
            justifyContent="center"
            sx={{ borderBottom: '1px solid #adacac', padding: '2rem 0px' }}
        >
            {
                index === 0 ?
                    <PageHeadingsAndDescriptions />
                    : null
            }
            <RowRadioButtonsGroup
                title={Questions[0]}
                radioOptionList={RadioOptions123}
                radioValue={radio1Value}
                onChange={radio1HandleChange}
            />
            <RowRadioButtonsGroup
                title={Questions[1]}
                radioOptionList={RadioOptions123}
                radioValue={radio2Value}
                onChange={radio2HandleChange}
            />
            <RowRadioButtonsGroup
                title={Questions[2]}
                radioOptionList={RadioOptions123}
                radioValue={radio3Value}
                onChange={radio3HandleChange}
            />
            <RowRadioButtonsGroup
                title={Questions[3]}
                radioOptionList={RadioOptions4}
                radioValue={radio4Value}
                onChange={radio4HandleChange}
            />
            <CheckboxWithLabels
                optionsList={checkboxValuesList}
                onChange={handleCheckboxChange}
            />
            <ScaleRadioBtn
                title={Questions[5]}
                radioValue={scaleRadioValue}
                onChange={scaleRadioHandleChange}
            />
        </Grid>
    );
}
export default FormDetails;