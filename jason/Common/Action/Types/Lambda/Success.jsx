import Success from '../../Success';
import type from './type';
import validations from '../../../../validations';

const context = 'action.type.$lambda';
const options = 'options';

// Action Type $lambda is the Same as Trigger.
// Is here for a completeness.
// Use $trigger if you want to call an action.
const SuccessTypeLambda = ({ children }) => {
  // We check for the required properties
  validations.array.required({ children }, context);

  // Then we check for the required children
  validations.children.required(children, [options], context);

  // Finally we check for the valid children
  const validChildren = [options];
  validations.children.are.valid(children, validChildren, context);

  return <Success type={type}>{children}</Success>;
};

export default SuccessTypeLambda;
