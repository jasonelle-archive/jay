import render from 'preact-render-to-json';
import { expect } from 'chai';
import Data from '../../../jason/Head/Data';

describe('Head.Data Component', () => {
  it('should return data as type', () => {
    const tree = render(<Data />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('data');
  });

  it('should render children', () => {
    const tree = render(
      <Data>
        <my_data />
      </Data>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('my_data');
  });
});
