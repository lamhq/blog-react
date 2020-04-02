import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import {
  EuiButton,
  EuiPanel,
} from '@elastic/eui';
import Layout from '../../layout/guest';
import PasswordField from '../../../eui/components/PasswordField';

const initialFormValues = {
  password: '',
  confirmPassword: '',
};

export default function ResetPwd({ validateForm, onSubmit }) {
  return (
    <Layout title="Reset Your Password" instruction="Enter your new password here.">
      <Formik
        initialValues={initialFormValues}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <EuiPanel>
            <Form>
              <PasswordField
                name="password"
                label="Password"
              />
              <PasswordField
                name="confirmPassword"
                label="Re-enter Password"
              />
              <EuiButton
                type="submit"
                color="primary"
                isLoading={isSubmitting}
                fill
              >
                Update
              </EuiButton>
            </Form>
          </EuiPanel>
        )}
      </Formik>
    </Layout>
  );
}

ResetPwd.propTypes = {
  validateForm: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
