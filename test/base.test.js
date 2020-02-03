const expect = require('chai').expect;
const Base = require('../elements/core/base');

describe('base()', () => {
  it('should be an object', done => {
    const out = Base();
    expect(out.__data).to.exist;
    expect(out.__data).to.be.an('object');
    done();
  });

  context('append', () => {
    it('should append object', done => {
      const data = { valid: true };
      const app = Base()
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
          Base()
            .mixin('https://google.com')
            .json()
        );
      }).to.not.throw();
      done();
    });
  });

  context('value', () => {
    it('should return data', done => {
      expect(JSON.stringify(Base().value())).to.be.eq(
        JSON.stringify(Base().__data)
      );
      done();
    });
  });

  context('val', () => {
    it('should return value', done => {
      expect(JSON.stringify(Base().val())).to.be.eq(
        JSON.stringify(Base().value())
      );
      done();
    });
  });

  context('render', () => {
    it('should return value', done => {
      expect(JSON.stringify(Base().render())).to.be.eq(
        JSON.stringify(Base().value())
      );
      done();
    });
  });

  context('object', () => {
    it('should generate valid object', done => {
      expect(() => {
        Base()
          .mixin('https://google.com')
          .object();
      }).to.not.throw();
      done();
    });
  });

  context('mixin', () => {
    it('should contain url', done => {
      const url = 'https://google.com';
      const app = Base()
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
        Base().mixin('');
      }).to.throw(Error, 'ValidationError: "value" is not allowed to be empty');
      done();
    });

    it('should fail with wrong url', done => {
      expect(() => {
        Base().mixin('//google');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should fail with unsuported scheme', done => {
      expect(() => {
        Base().mixin('ftp://google.com');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with http scheme', done => {
      expect(() => {
        Base().mixin('http://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with https scheme', done => {
      expect(() => {
        Base().mixin('https://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with file scheme', done => {
      expect(() => {
        Base().mixin('file://local.file');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });
  });
});
