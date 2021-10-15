import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as yup from 'yup';
import 'animate.css';
import * as actionCreators from './../../actions';
import styles from './TodoForm.module.sass';

function TodoForm () {
  const dispatch = useDispatch();
  const { createTodoAction } = bindActionCreators(actionCreators, dispatch);

  const initialValues = { body: '', isDone: false };

  const submitHandler = (values, formikBag) => {
    createTodoAction(values);
    formikBag.resetForm();
  };

  const TASK_SCHEMA = yup.object({
    body: yup
      .string()
      .max(100, 'Too big task :)')
      .matches(/^\S+.*/, 'No spaces in start')
      .required('Enter task'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_SCHEMA}
    >
      <Form className={styles.formContainer}>
        <Field type='text' name='body' placeholder='Enter todo here' />
        <button type='sumbit'>Submit</button>

        <ErrorMessage
          name='body'
          render={msg => (
            <div className='animate__animated animate__jackInTheBox'>{msg}</div>
          )}
        />
      </Form>
    </Formik>
  );
}

export default TodoForm;
