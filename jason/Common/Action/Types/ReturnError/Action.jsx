import type from './type';
import Action from '../../Action';

const ActionTypeReturnError = ({ className, children }) => (
  <Action className={className} type={type}>
    {children}
  </Action>
);

export default ActionTypeReturnError;
