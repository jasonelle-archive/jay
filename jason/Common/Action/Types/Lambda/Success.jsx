import Success from '../../Success';
import type from './type';

// Action Type $lambda is the Same as Trigger.
// Is here for a completeness.
// Use $trigger if you want to call an action.
const SuccessTypeLambda = ({ children }) => (
  <Success type={type}>{children}</Success>
);

export default SuccessTypeLambda;
