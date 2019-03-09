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

  it('should head, body be a valid children', () => {
    expect(() =>
      render(
        <Jason>
          <head />
          <body />
        </Jason>
      )
    ).to.not.throw('Validation Error');
  });
});
