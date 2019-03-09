import render from 'preact-render-to-json';
import { expect } from 'chai';
import Head from '../../jason/Head/Head';

describe('Head Component', () => {
  it('should return head as type', () => {
    const tree = render(<Head />);
    expect(tree).to.have.property('type');
    expect(tree.type).to.be.eq('head');
  });

  it('should validate its children', () => {
    expect(() => render(<Head>Invalid Children</Head>)).to.throw(
      'Validation Error'
    );
  });
});
