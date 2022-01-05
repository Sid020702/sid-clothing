import React from 'react';
import { GroupComponent, FormInputComponent, LabelComponent } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupComponent>
        <FormInputComponent onChange={handleChange} {...otherProps} />
        {
            label ?
                <LabelComponent {...otherProps}>
                    {label}
                </LabelComponent >
                : null
        }
    </GroupComponent>
)

export default FormInput