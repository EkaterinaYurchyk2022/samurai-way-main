import React, {FC} from 'react';
import styles from './FormsControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children:any
}

export const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {

    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {

    return (
        <FormControl meta={meta}> <textarea {...input} {...restProps}/> </FormControl>
    )
}

export const Input: FC<WrappedFieldProps> = ({input, meta, ...restProps}) => {
    return (
        <FormControl meta={meta}> <input {...input} {...restProps}/> </FormControl>
    )
}