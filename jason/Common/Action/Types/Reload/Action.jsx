import Action from '../../Action';
import type from './type';
// This is a common pattern to return an Action with a $reload type
// So this component helps saving time.
const ActionTypeReload = ({ className, children }) => (
  <Action className={className} type={type}>
    {children}
  </Action>
);

export default ActionTypeReload;
