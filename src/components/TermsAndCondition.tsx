import React from 'react'
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function TermsAndCondition() {
    const flightsList = useSelector((state: RootState) => state.flights);
    const { ReferenceList } = flightsList;

    // console.log((ReferenceList[2]?.TermsAndConditions));
    const allTermsAndConditions = ReferenceList[2]?.TermsAndConditions

    console.log('terms', allTermsAndConditions)

    return (
        <div>TermsAndCondition</div>
    )
}

export default TermsAndCondition

