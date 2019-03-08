import Types from './types';
import Success from './Success';

// This is a common pattern to return a success action with a $reload type
// So this component helps saving time.
const SuccessTypeReload = ({ children }) => (
  <Success type={Types.reload}>{children}</Success>
);

export default SuccessTypeReload;
