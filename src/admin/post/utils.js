import validate from 'validate.js';
import { transformErrors } from '../../common/utils';

export function validatePostForm(data) {
  const constraints = {
    title: {
      presence: { allowEmpty: false, message: '^This field is required' },
    },
  };

  return transformErrors(validate(data, constraints));
}

export default validatePostForm;
