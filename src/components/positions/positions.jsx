import React from 'react';
import './positions.scss';

const Positions = (props) => {

    const {data, onCheck, classesValid} = props;

    return (
        <div className={`positions_wrapper ${classesValid == 'error_valid' ? 'error_valid_pos' : ''}`}>
            <h6 className='positions_title'>{'Select your position'}</h6>
            {
                data?.positions?.map(item =>
                    <label className='position' key={item.id}>{item.name}
                        <input onClick={onCheck} name='input_name' id={item.id} type='radio'/>
                        <span className='radio'></span>
                    </label>
                )
            }
        </div>
    );
};

export default Positions;