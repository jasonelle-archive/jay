import { h } from 'preact'; /** @jsx h */
import chai, { expect } from 'chai';
import assertJsx from 'preact-jsx-chai';

chai.use(assertJsx);

// check if two JSX DOMs are deeply equal:
expect(<div id="1">a</div>).to.deep.equal(<div id="1">a</div>);

// check if a given JSX DOM contains the given fragment:
expect(
	<div>
		{' '}
		<span>foo!</span>{' '}
	</div>
).to.contain(<span>foo!</span>);
