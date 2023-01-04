import React from 'react';
import './textarea.scss';

const Textarea = (props) => {

    const {handleFile, classesValid, type, photo} = props;

    return (
        <div className='text_area_wrap'>
            <label className={`upload_btn ${classesValid == 'error_valid' ? 'error_valid_file' : ''}`} htmlFor='actual-btn'>{'Upload'}</label>
            <label className={`upload_field ${classesValid == 'error_valid' ? 'error_valid_file2' : ''}`} htmlFor='actual-btn'></label>
            <input onChange={handleFile} id='actual-btn' type={type} hidden/>
            <input onChange={handleFile} id='actual-btnq23' type='file' hidden/>
            <span className='help_block_textarea'>{photo}</span>
        </div>
    );
};

export default Textarea;