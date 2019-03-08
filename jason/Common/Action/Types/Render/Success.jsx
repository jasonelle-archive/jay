import type from './type';
import Success from '../../Success';

// This is a common pattern to return a success action with a $render type
// So this component helps saving time.
const SuccessTypeRender = ({ children }) => (
  <Success type={type}>{children}</Success>
);

export default SuccessTypeRender;
