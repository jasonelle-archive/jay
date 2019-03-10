import render from 'preact-render-to-json';
import { expect } from 'chai';
import Style from '../../../jason/Common/Style';

describe('Style Component', () => {
  it('should return style as type', () => {
    const tree = render(<Style />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('style');
  });

  it('should return className as type', () => {
    const tree = render(<Style className="mystyle" />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('mystyle');
  });

  it('should render props', () => {
    const tree = render(<Style color="#ffffff" />);
    expect(tree).to.have.property('props');
    expect(tree.props).to.have.property('color');
    expect(tree.props.color).to.be.eq('#ffffff');
  });

  it('should not render children', () => {
    expect(() => render(<Style>not valid</Style>)).to.throw('Validation Error');
  });
});
