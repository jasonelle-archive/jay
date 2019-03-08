import type from './type';
import Action from '../../Action';

const ActionTypeReturnSuccess = ({ className, children }) => (
  <Action className={className} type={type}>
    {children}
  </Action>
);

export default ActionTypeReturnSuccess;
