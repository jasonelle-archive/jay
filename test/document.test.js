const expect = require('chai').expect;
const document = require('../elements/document');

describe('document()', () => {
  it('should be an object', done => {
    expect(document()).to.be.an('object');
    done();
  });

  context('$jason', () => {
    it('should be an object', done => {
      const app = document()
        .jason()
        .val();
      expect(app).to.be.an('object');
      expect(app.$jason).to.exist;
      expect(app.$jason).to.be.an('object');
      expect(app.$jason.head).to.not.exist;
      expect(app.$jason.body).to.not.exist;
      done();
    });

    it('should contain head, but not body', done => {
      const app = document()
        .jason({ head: {} })
        .val();
      expect(app.$jason.head).to.exist;
      expect(app.$jason.body).to.not.exist;
      expect(app.$jason.head).to.be.an('object');
      done();
    });

    it('should contain body, but not head', done => {
      const app = document()
        .jason({ body: {} })
        .val();
      expect(app.$jason.head).to.not.exist;
      expect(app.$jason.body).to.exist;
      expect(app.$jason.body).to.be.an('object');
      done();
    });
  });
});
