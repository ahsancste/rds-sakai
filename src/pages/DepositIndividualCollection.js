import React from 'react';
import {Button} from "primereact/button";
import {InputNumber} from "primereact/inputnumber";

const DepositIndividual = () => {

    return (
        <div className="grid">
            <div className="sm:col-12">
                <div className="card">
                    <h5>Individual Deposit Collection</h5>
                    <div className="formgroup-inline">
                        <div className="field">
                            {/*<span className="sm:text-sm">A/C No *</span>*/}
                            <InputNumber id="version" className="p-inputtext-sm sm:col-1 ml-2" mode="decimal" useGrouping={false} min={1} max={1} style={{width: '4rem'}}/>
                            <InputNumber id="countryCode" type="text" className="p-inputtext-sm ml-1"/>
                            <InputNumber id="branchCode" type="text" className="p-inputtext-sm ml-1"/>
                            <InputNumber id="type" type="text" className="p-inputtext-sm ml-1"/>
                            <InputNumber id="serial" type="text" className="p-inputtext-sm ml-1"/>
                            <InputNumber id="checkSum" type="text" className="p-inputtext-sm ml-1"/>
                        </div>
                        <Button label="Submit"></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(DepositIndividual, comparisonFn);
