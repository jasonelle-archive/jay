import Options from '../../../Options';
import validations from '../../../../validations';

const context = '$lambda.options';
const options = 'options';

const LambdaOptions = ({ name, children }) => {
  // We check for the required properties
  validations.array.required({ name, children }, context);

  // Then we check for the required children
  validations.children.required(children, [options], context);

  // Finally we check for the valid children
  const validChildren = [options];
  validations.children.are.valid(children, validChildren, context);

  return <Options name={name}>{children}</Options>;
};

export default LambdaOptions;
