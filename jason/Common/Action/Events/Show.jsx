import Action from '../Action';

const name = '$show';
const Show = ({ type, children }) => (
  <Action className={name} type={type}>
    {children}
  </Action>
);

export default Show;
