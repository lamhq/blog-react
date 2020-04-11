import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import {
  EuiButton,
  EuiPanel,
} from '@elastic/eui';
import Layout from '../../layout/guest';
import PasswordField from '../../../eui/components/PasswordField';
import { useTranslation } from '../../../common/hooks';

const initialFormValues = {
  password: '',
  confirmPassword: '',
};

export default function ResetPwd({ validateForm, onSubmit }) {
  const { t } = useTranslation();
  return (
    <Layout title={t('reset-pwd/title')} instruction={t('reset-pwd/instruction')}>
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
                label={t('user/displayName')}
              />
              <PasswordField
                name="confirmPassword"
                label={t('user/confirm-password')}
              />
              <EuiButton
                type="submit"
                color="primary"
                isLoading={isSubmitting}
                fill
              >
                {t('reset-pwd/submit')}
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
