import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../../../utils/validators/validators';

type MyPostFormPropsType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm: FC<InjectedFormProps<MyPostFormPropsType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       validate={[required, maxLength10]}
                       placeholder={'Post message'}
                />
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    )
}
export const AddNewPostFormRedux = reduxForm<MyPostFormPropsType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)