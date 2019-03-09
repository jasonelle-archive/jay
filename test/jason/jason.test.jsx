import render from 'preact-render-to-json';
import { expect } from 'chai';
import Jason from '../../jason/Jason';

describe('Jason Component', () => {
  it('should return $jason as type', () => {
    const tree = render(<Jason />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('$jason');
  });

  it('should validate its children', () => {
    expect(() => render(<Jason>Invalid Children</Jason>)).to.throw(
      'Validation Error'
    );
  });

  it('head should be a valid children', () => {
    const tree = render(
      <Jason>
        <head />
      </Jason>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('head');
  });

  it('body should be a valid children', () => {
    const tree = render(
      <Jason>
        <body />
      </Jason>
    );

    expect(tree).to.have.property('children');
    const child = tree.children[0];
    expect(child.type).to.be.eq('body');
  });
});
