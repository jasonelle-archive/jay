import render from 'preact-render-to-json';
import { expect } from 'chai';
import Templates from '../../../jason/Head/Templates';

describe('Head.Templates Component', () => {
  it('should return templates as type', () => {
    const tree = render(<Templates />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('templates');
  });

  it('should render children', () => {
    const tree = render(
      <Templates>
        <body />
      </Templates>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('body');
  });
});
