import React from 'react';
import "./form.scss";
import Input from "../input/input";
import Positions from "../positions/positions";
import Textarea from "../textarea/textarea";
import Button from "../button/button";

const Form = (props) => {

    const {onChange, label, positions, formActive, handleFile, onSubmit, onCheck, formData, formValid, error} = props;
    const {name, email, phone, position_id, photo} = formValid;

    return (
        <div className='form_wrapper'>
            <form autoComplete="off" className='form_container'>
                <h4 className='userlist_title'>Working with POST request</h4>
                <div className='input_wrapper'>
                    <Input er={name} classes={`${formData.name != '' ? 'active_pl' : 'not_active_pl'}`} classesValid={`${name != undefined && name != '' ? 'error_valid' : ''}`} onChange={onChange} name={'name'} label={label} type='text'/>
                    <Input er={email} classes={`${formData.email != '' ? 'active_pl' : 'not_active_pl'}`} classesValid={`${email !== undefined && email != '' ? 'error_valid' : ''}`} name={'email'} label={label} onChange={onChange} type='text'/>
                    <Input er={phone} classes={`${formData.phone != '' ? 'active_pl' : 'not_active_pl'}`} classesValid={`${phone !== undefined && phone != '' ? 'error_valid' : ''}`} name={'phone'} label={label} onChange={onChange} type='number'/>
                </div>
                <Positions classesValid={`${position_id != undefined && position_id != '' ? 'error_valid' : ''}`} data={positions} onCheck={onCheck} />
                <Textarea photo={photo} formValid={formValid} error={error} classesValid={`${photo != undefined && photo != '' ? 'error_valid' : ''}`} type='file' handleFile={handleFile} />
                <Button onClick={onSubmit} type={`${formActive === true ? 'yellow' : 'gray'}`} text={'Sign Up'}/>
            </form>
        </div>
    );
};

export default Form;