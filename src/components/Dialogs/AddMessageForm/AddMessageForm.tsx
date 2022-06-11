import {maxLengthCreator, required} from '../../../utils/validators/validators';
import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';

type DialogsFormPropsType = {
    newMessageBody: string
}
const maxLength50 = maxLengthCreator(50);
const AddMessageForm: FC<InjectedFormProps<DialogsFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageBody'}
                       validate={[required, maxLength50]}
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button type={'submit'}>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<DialogsFormPropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)