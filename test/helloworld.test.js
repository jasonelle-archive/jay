const expect = require('chai').expect;
const document = require('../elements/document');
const head = require('../elements/head');

describe('hello-world', () => {
  it('should render', done => {
    const app = document().jason({
      head: head()
        .title('My App')
        .description('Made using Jay and Jasonette')
        .offline()
        .render()
    });
    expect(app.json()).to.be.eq(
      `{"$jason":{"head":{"title":"My App","description":"Made using Jay and Jasonette","offline":true}}}`
    );
    done();
  });
});
