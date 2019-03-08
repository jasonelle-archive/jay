import Options from '../../../Options';
import validations from '../../../../validations';

const LambdaOptions = ({ name, children }) => {
  if (!name) {
    validations.errors.required('name', '$lambda.options');
  }
  return <Options name={name}>{children}</Options>;
};

export default LambdaOptions;
