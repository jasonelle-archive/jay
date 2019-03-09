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

  it('should styles, actions, templates, data, agents be valid children', () => {
    expect(() =>
      render(
        <Head>
          <styles />
          <actions />
          <templates />
          <data />
          <agents />
        </Head>
      )
    ).to.not.throw('Validation Error');
  });

  it('should have property title', () => {
    const tree = render(<Head title="hello" />);
    expect(tree.props).to.have.property('title');
    expect(tree.props.title).to.be.eq('hello');
  });

  it('should have property description', () => {
    const tree = render(<Head description="hello" />);
    expect(tree.props).to.have.property('description');
    expect(tree.props.description).to.be.eq('hello');
  });

  it('should have property icon', () => {
    const tree = render(<Head icon="file://icon.png" />);
    expect(tree.props).to.have.property('icon');
    expect(tree.props.icon).to.be.eq('file://icon.png');
  });

  it('should property icon be url valid', () => {
    expect(() => render(<Head icon="noturl" />)).to.throw('Validation Error');
  });

  it('should have property offline', () => {
    const tree = render(<Head offline="on" />);
    expect(tree.props).to.have.property('offline');
    // Offline should always return true if present in props
    expect(tree.props.offline).to.be.eq('true');
  });
});
