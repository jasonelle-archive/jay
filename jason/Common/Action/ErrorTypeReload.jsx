import Types from './types';
import Error from './Error';

// This is a common pattern to return a Error action with a $reload type
// So this component helps saving time.
const ErrorTypeReload = ({ children }) => (
  <Error type={Types.reload}>{children}</Error>
);

export default ErrorTypeReload;
