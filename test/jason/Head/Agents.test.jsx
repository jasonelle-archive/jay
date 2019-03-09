import render from 'preact-render-to-json';
import { expect } from 'chai';
import Agents from '../../../jason/Head/Agents';

describe('Head.Agents Component', () => {
  it('should return agents as type', () => {
    const tree = render(<Agents />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('agents');
  });

  it('should render children', () => {
    const tree = render(
      <Agents>
        <my_agent />
      </Agents>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('my_agent');
  });
});
