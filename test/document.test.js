const expect = require('chai').expect;
const document = require('../elements/document');

describe('document()', () => {
  it('should be an object', done => {
    expect(document()).to.be.an('object');
    done();
  });

  context('append', () => {
    it('should append object', done => {
      const data = { valid: true };
      const app = document()
        .mixin('https://google.com')
        .append(data)
        .val();

      expect(app).to.be.an('object');
      expect(app.valid).to.exist;
      expect(app.valid).to.be.true;
      expect(app['@']).to.exist;

      done();
    });
  });

  context('json', () => {
    it('should generate valid json', done => {
      expect(() => {
        JSON.parse(
          document()
            .mixin('https://google.com')
            .json()
        );
      }).to.not.throw();
      done();
    });
  });

  context('object', () => {
    it('should generate valid object', done => {
      expect(() => {
        document()
          .mixin('https://google.com')
          .object();
      }).to.not.throw();
      done();
    });
  });

  context('mixin', () => {
    it('should contain url', done => {
      const url = 'https://google.com';
      const app = document()
        .mixin(url)
        .val();

      expect(app).to.be.an('object');
      expect(app['@']).to.exist;
      expect(app['@']).to.be.a('string');
      expect(app['@']).to.be.eq(url);

      done();
    });

    it('should fail with empty url', done => {
      expect(() => {
        document().mixin('');
      }).to.throw(Error, 'ValidationError: "value" is not allowed to be empty');
      done();
    });

    it('should fail with wrong url', done => {
      expect(() => {
        document().mixin('//google');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should fail with unsuported scheme', done => {
      expect(() => {
        document().mixin('ftp://google.com');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with http scheme', done => {
      expect(() => {
        document().mixin('http://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with https scheme', done => {
      expect(() => {
        document().mixin('https://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with file scheme', done => {
      expect(() => {
        document().mixin('file://local.file');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });
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
