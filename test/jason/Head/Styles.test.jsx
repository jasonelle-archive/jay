import render from 'preact-render-to-json';
import { expect } from 'chai';
import Styles from '../../../jason/Head/Styles';

describe('Head.Styles Component', () => {
  it('should return styles as type', () => {
    const tree = render(<Styles />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('styles');
  });

  it('should render children', () => {
    const tree = render(
      <Styles>
        <my_style color="red" />
      </Styles>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('my_style');
    expect(child.props.color).to.be.eq('red');
  });
});
