import Options from '../../../Options';
import validations from '../../../../validations';

const context = '$lambda.options';

const LambdaOptions = ({ name, children }) => {
  if (!name) {
    validations.errors.required('name', context);
  }

  if (!children) {
    validations.errors.required('options', context);
  }

  const validChildren = ['options'];
  validations.children.are.valid(children, validChildren, context);

  return <Options name={name}>{children}</Options>;
};

export default LambdaOptions;
