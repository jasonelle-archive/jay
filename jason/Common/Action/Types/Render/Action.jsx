import type from './type';
import Action from '../../Action';

// This is a common pattern to return a Error action with a $render type
// So this component helps saving time.
const ActionTypeRender = ({ className, children }) => (
  <Action className={className} type={type}>
    {children}
  </Action>
);

export default ActionTypeRender;
