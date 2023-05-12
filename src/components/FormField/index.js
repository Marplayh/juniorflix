/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';
import { Input, Label, Container } from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const hasValue = value.length;
  return (
    <Container>
      <Label>

        <Input
          as={tag}
          name={name}
          onChange={onChange}
          value={value}
          hasValue={hasValue}
          type={type}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </Container>

  );
}

// eslint-disable-next-line react/no-typos
FormField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default FormField;
