import type from './type';
import Action from '../../Action';

// Action Type $lambda is the Same as Trigger.
// Is here for a completeness.
// Use $trigger if you want to call an action.
const ActionTypeLambda = ({ className, children }) => (
  <Action className={className} type={type}>
    {children}
  </Action>
);

export default ActionTypeLambda;
