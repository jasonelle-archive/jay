import Types from './types';
import Success from './Success';

// This is a common pattern to return a success action with a $render type
// So this component helps saving time.
const SuccessTypeRender = ({ children }) => (
  <Success type={Types.render}>{children}</Success>
);

export default SuccessTypeRender;
