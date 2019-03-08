import Types from './types';
import Action from './Action';

// Action Type Lambda is the Same as Trigger.
// Is here for a completeness.
// Use trigger if you want to call an action.
const ActionTypeLambda = ({ className, children }) => (
  <Action className={className} type={Types.lambda}>
    {children}
  </Action>
);

export default ActionTypeLambda;
