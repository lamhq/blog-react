import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import {
  EuiSelect,
  EuiFormRow,
} from '@elastic/eui';
import { useTranslation } from '../../common/hooks';

export default function SelectField({
  label,
  options,
  name,
  ...rest
}) {
  const { t } = useTranslation();
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error !== undefined;
  return (
    <EuiFormRow
      label={label}
      isInvalid={hasError}
      error={t(meta.error)}
    >
      <EuiSelect
        isInvalid={hasError}
        options={options}
        {...field}
        {...rest}
      />
    </EuiFormRow>
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

SelectField.defaultProps = {
  label: '',
};
