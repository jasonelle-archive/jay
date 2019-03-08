import type from './type';
import Action from '../../Action';

// No children allowed in this action type
const ActionTypeReturnSuccess = ({ className }) => (
  <Action className={className} type={type} />
);

export default ActionTypeReturnSuccess;
