import render from 'preact-render-to-json';
import { expect } from 'chai';
import Actions from '../../../jason/Head/Actions';

describe('Head.Actions Component', () => {
  it('should return actions as type', () => {
    const tree = render(<Actions />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('actions');
  });

  it('should render children', () => {
    const tree = render(
      <Actions>
        <my_action type="$return.success" />
      </Actions>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('my_action');
    expect(child.props.type).to.be.eq('$return.success');
  });
});
