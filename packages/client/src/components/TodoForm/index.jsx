import { Form, Formik } from 'formik';
import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import * as actionCreators from '../../actions';
import styles from './TodoForm.module.sass';
import Input from '../Input';

function TodoForm () {
  const dispatch = useDispatch();
  const { createTodoAction } = bindActionCreators(actionCreators, dispatch);

  const initialValues = { taskBody: '' };

  const submitHandler = (values, formikBag) => {
    createTodoAction(values);
    formikBag.resetForm();
  };

  const TASK_SCHEMA = yup.object({
    taskBody: yup
      .string()
      .max(255, 'Too big task :)')
      .matches(/^\S+.*/, 'No spaces in start')
      .required('Enter task'),
  });

  const inputClasses = {
    valid: styles.valid,
    invalid: styles.invalid,
    input: styles.input,
    errorStyle: styles.error,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_SCHEMA}
    >
      <Form className={styles.formContainer}>
        <Input
          type='text'
          name='taskBody'
          placeholder='Enter todo here'
          classes={inputClasses}
        />
        <button type='sumbit' className={styles.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
