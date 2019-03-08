import Success from '../../Success';
import type from './type';

// This is a common pattern to return a success action with a $reload type
// So this component helps saving time.
const SuccessTypeReload = ({ children }) => (
  <Success type={type}>{children}</Success>
);

export default SuccessTypeReload;
