import render from 'preact-render-to-json';
import { expect } from 'chai';
import Options from '../../../jason/Common/Options';

describe('Options Component', () => {
  it('should return options as type', () => {
    const tree = render(<Options />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('options');
  });

  it('should render props', () => {
    const tree = render(<Options text="hello" />);
    expect(tree).to.have.property('props');
    expect(tree.props).to.have.property('text');
    expect(tree.props.text).to.be.eq('hello');
  });

  it('should render children', () => {
    const tree = render(
      <Options>
        <my_option />
      </Options>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('my_option');
  });
});
