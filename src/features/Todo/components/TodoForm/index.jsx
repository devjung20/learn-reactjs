import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputFeature from './../../../../components/form-controlls/InputFeature/index';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup
    .object({
      title: yup.string().required('Please enter tilte!!').min(5, 'Title is too short'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (value) => {
    console.log('TODO FORM', value);
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(value);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputFeature name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
