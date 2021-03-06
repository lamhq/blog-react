/* eslint-disable arrow-body-style */
import validate from 'validate.js';
import { transformErrors } from '../../common/utils';

export function validateForgotPwdForm(data) {
  const constraints = {
    email: {
      email: {
        message: '^Not a recognised email domain. Try again.',
      },
      presence: { allowEmpty: false },
    },
  };

  return transformErrors(validate(data, constraints));
}

export default validateForgotPwdForm;
