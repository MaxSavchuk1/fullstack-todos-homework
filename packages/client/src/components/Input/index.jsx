import classNames from 'classnames';
import { useField, useFormikContext } from 'formik';
import React from 'react';

function Input (props) {
  const {
    classes: { input, valid, invalid, errorStyle },
  } = props;

  const [field, { touched, error }] = useField(props);

  const {
    values: { todo },
  } = useFormikContext();
  const isInvalid = todo && touched && error;

  const inputStyle = classNames(
    input,
    { [valid]: touched && !error },
    { [invalid]: isInvalid }
  );
  return (
    <>
      <input {...field} {...props} className={inputStyle} />
      {isInvalid && <div className={errorStyle}>{error}</div>}
    </>
  );
}

export default Input;
