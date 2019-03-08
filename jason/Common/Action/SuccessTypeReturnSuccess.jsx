import Types from './types';
import Success from './Success';

// This is a common pattern to return a success action with a $return.success type
// So this component helps saving time.
// This type does not accept children since its the bottom of the calling stack.
const SuccessTypeReturnSuccess = () => <Success type={Types.return.success} />;

export default SuccessTypeReturnSuccess;
