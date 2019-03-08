import Types from './types';
import Error from './Error';

// This is a common pattern to return a Error action with a $render type
// So this component helps saving time.
const ErrorTypeRender = ({ children }) => (
  <Error type={Types.render}>{children}</Error>
);

export default ErrorTypeRender;
