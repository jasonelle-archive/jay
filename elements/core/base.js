const Base = () => ({
  __data: {},
  value: function() {
    return this.__data || this;
  },
  json: function() {
    return JSON.stringify(this.value());
  },
  object: function() {
    return JSON.parse(this.json());
  },
  val: function() {
    return this.value();
  }
});

module.exports = Base;
