import Error from '../../Error';
import type from './type';

// Action Type $lambda is the Same as Trigger.
// Is here for a completeness.
// Use $trigger if you want to call an action.
const ErrorTypeLambda = ({ children }) => <Error type={type}>{children}</Error>;

export default ErrorTypeLambda;
