import React from 'react';
import './input.scss';

const Input = (props) => {

    const {type, placeholder, name, onChange, classes, classesValid, er} = props;



    return (
        <div tabIndex="1" className='input_wrap'>
            <label className={`label ${type}`}>
                <input autoComplete="off" name={name} id='input' type={type} onChange={onChange} className={`input ${classesValid == 'error_valid' ? 'error_valid' : ''}`}/>
                <span className='default_label'>{placeholder}</span>
                <span className={`${type === 'number' ? 'number_show' : 'number_hid'}`}>{'+38 (XXX) XXX - XX - XX'}</span>
                <span className={`${classes === 'active_pl' ? 'pl_hid' : 'pl_show'} ${classesValid == 'error_valid' ? 'error_valid_msg' : ''}`}>{name}</span>
                <span className='help_block'>{er}</span>
            </label>
        </div>
    );
};

export default Input;