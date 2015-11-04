const keyMirror = require('./');
const assert = require('assert');

const test = {
  a: {
    b: {
      c: {
        d: null,
        e: null
      }
    }
  },
  f: null,
  g: {
    h: {
      i: {
        j: {
          k: {
            l: {
              m: {
                n: null,
                o: null
              }
            }
          },
          p: null
        }
      }
    }
  }
};

const expected = {
  a: {
    b: {
      c: {
        d: 'a.b.c.d',
        e: 'a.b.c.e'
      }
    }
  },
  f: 'f',
  g: {
    h: {
      i: {
        j: {
          k: {
            l: {
              m: {
                n: 'g.h.i.j.k.l.m.n',
                o: 'g.h.i.j.k.l.m.o'
              }
            }
          },
          p: 'g.h.i.j.p'
        }
      }
    }
  }
};

const result = keyMirror(test);
assert.deepEqual(result, expected);
