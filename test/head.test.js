const expect = require('chai').expect;
const head = require('../elements/head');

describe('head()', () => {
  it('should be an object', done => {
    const out = head();
    expect(out.__data).to.exist;
    expect(out.__data).to.be.an('object');
    done();
  });

  context('title', () => {
    it('should be valid when empty', done => {
      const out = head().title();
      expect(out.__data.title).to.exist;
      expect(out.__data.title).to.be.a('string');
      expect(out.__data.title).to.be.eq('');
      done();
    });

    it('should throw error when not string', done => {
      expect(() => {
        head().title({});
      }).to.throw;
      done();
    });

    it('should return the same text', done => {
      const text = 'my app';
      const out = head().title(text);

      expect(out.__data.title).to.be.a('string');
      expect(out.__data.title).to.be.eq(text);

      done();
    });
  });

  context('description', () => {
    it('should be valid when empty', done => {
      const out = head().description();
      expect(out.__data.description).to.exist;
      expect(out.__data.description).to.be.a('string');
      expect(out.__data.description).to.be.eq('');
      done();
    });

    it('should throw error when not string', done => {
      expect(() => {
        head().description({});
      }).to.throw;
      done();
    });

    it('should return the same text', done => {
      const text = 'my app';
      const out = head().description(text);

      expect(out.__data.description).to.be.a('string');
      expect(out.__data.description).to.be.eq(text);

      done();
    });
  });

  context('icon', () => {
    it('should contain url', done => {
      const url = 'https://google.com';
      const out = head().icon(url);

      expect(out).to.be.an('object');
      expect(out.__data.icon).to.exist;
      expect(out.__data.icon).to.be.a('string');
      expect(out.__data.icon).to.be.eq(url);

      done();
    });

    it('should fail with empty url', done => {
      expect(() => {
        head().icon('');
      }).to.throw(Error, 'ValidationError: "value" is not allowed to be empty');
      done();
    });

    it('should fail with wrong url', done => {
      expect(() => {
        head().icon('//google');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should fail with unsuported scheme', done => {
      expect(() => {
        head().icon('ftp://google.com');
      }).to.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with http scheme', done => {
      expect(() => {
        head().icon('http://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with https scheme', done => {
      expect(() => {
        head().icon('https://google.com');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });

    it('should pass with file scheme', done => {
      expect(() => {
        head().icon('file://local.file');
      }).to.not.throw(
        Error,
        'ValidationError: "value" must be a valid uri with a scheme matching the file|https? pattern'
      );
      done();
    });
  });

  context('offline', () => {
    it('should return true', done => {
      const out = head()
        .title('offline app')
        .offline();
      expect(out.__data.offline).to.exist;
      expect(out.__data.offline).to.be.true;
      done();
    });
  });

  context('value', () => {
    it('should return a value', done => {
      const title = 'my title';
      const description = 'my description';

      const out = head()
        .title(title)
        .description(description)
        .offline();

      const value = out.value();

      expect(out.__data).to.exist;
      expect(value).to.exist;
      expect(value.title).to.exist;
      expect(value.title).to.eq(title);

      expect(value.description).to.exist;
      expect(value.description).to.eq(description);
      expect(value.offline).to.exist;

      done();
    });
  });

  context('actions', () => {
    it('should have actions property', done => {
      const out = head()
        .actions()
        .val();
      expect(out.actions).to.exist;
      expect(out.actions).to.be.an('object');
      done();
    });

    it('should merge with params', done => {
      const out = head()
        .actions({ my_custom_action: { type: '$ok' } })
        .val();
      expect(out.actions.my_custom_action).to.exist;
      expect(out.actions.my_custom_action).to.be.an('object');
      expect(out.actions.my_custom_action.type).to.be.eq('$ok');
      done();
    });
  });

  context('styles', () => {
    it('should have styles property', done => {
      const out = head()
        .styles()
        .val();
      expect(out.styles).to.exist;
      expect(out.styles).to.be.an('object');
      done();
    });

    it('should merge with params', done => {
      const out = head()
        .styles({ my_custom_style: { size: 15 } })
        .val();
      expect(out.styles.my_custom_style).to.exist;
      expect(out.styles.my_custom_style).to.be.an('object');
      expect(out.styles.my_custom_style.size).to.be.eq(15);
      done();
    });
  });

  context('templates', () => {
    it('should have templates property', done => {
      const out = head()
        .templates()
        .val();
      expect(out.templates).to.exist;
      expect(out.templates).to.be.an('object');
      done();
    });

    it('should merge with params', done => {
      const out = head()
        .templates({ body: {} })
        .val();
      expect(out.templates.body).to.exist;
      expect(out.templates.body).to.be.an('object');
      done();
    });
  });

  context('agents', () => {
    it('should have agents property', done => {
      const out = head()
        .agents()
        .val();
      expect(out.agents).to.exist;
      expect(out.agents).to.be.an('object');
      done();
    });

    it('should merge with params', done => {
      const out = head()
        .agents({ myagent: {} })
        .val();
      expect(out.agents.myagent).to.exist;
      expect(out.agents.myagent).to.be.an('object');
      done();
    });
  });

  context('data', () => {
    it('should have data property', done => {
      const out = head()
        .data()
        .val();
      expect(out.data).to.exist;
      expect(out.data).to.be.an('object');
      done();
    });

    it('should merge with params', done => {
      const out = head()
        .data({ myvar: {} })
        .val();
      expect(out.data.myvar).to.exist;
      expect(out.data.myvar).to.be.an('object');
      done();
    });
  });
});
