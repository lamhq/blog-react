import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { getIn, useField } from 'formik';
import {
  EuiFieldPassword,
  EuiFormRow,
} from '@elastic/eui';

export default function PasswordField({ label, name, ...rest }) {
  const { t } = useTranslation();
  const [field, meta] = useField(name);
  const touchVal = getIn(meta.touched, field.name);
  const errText = getIn(meta.errors, field.name);
  const hasError = touchVal && (errText !== undefined);
  const localizedErrText = Array.isArray(errText) ? t(...errText) : t(errText);
  return (
    <EuiFormRow
      label={label}
      isInvalid={hasError}
      error={localizedErrText}
    >
      <EuiFieldPassword
        isInvalid={hasError}
        {...field}
        {...rest}
      />
    </EuiFormRow>
  );
}

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

PasswordField.defaultProps = {
  label: '',
};
