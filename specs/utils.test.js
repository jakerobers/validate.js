import { expect } from 'chai'
import * as Utils from '../src/utils'

describe('Utils.isNumber', () => {
  it('is false for non-numbers', () => {
    expect(Utils.isNumber('asdf')).to.equal(false)
  })

  it('is false for NaN', () => {
    expect(Utils.isNumber(NaN)).to.equal(false)
  })

  it('is true for number', () => {
    expect(Utils.isNumber(123)).to.equal(true)
  })
})

describe('Utils.isFunction', () => {
  it('is true for functions', () => {
    expect(Utils.isFunction(() => {})).to.equal(true)
  })

  it('is false for non-functions', () => {
    expect(Utils.isFunction({})).to.equal(false)
  })
})

describe('Utils.isInteger', () => {
  it('is false for non-numbers', () => {
    expect(Utils.isInteger('asdf')).to.equal(false)
  })

  it('is false for floats', () => {
    expect(Utils.isInteger(12.34)).to.equal(false)
  })

  it('is true for integers', () => {
    expect(Utils.isInteger(1234)).to.equal(true)
  })
})

describe('Utils.isBoolean', () => {
  it('is false for non-booleans', () => {
    expect(Utils.isBoolean('asdf')).to.equal(false);
  })

  it('is true for `false`', () => {
    expect(Utils.isBoolean(false)).to.equal(true);
  })

  it('is true for `true`', () => {
    expect(Utils.isBoolean(true)).to.equal(true);
  })
})

describe('Utils.isObject', () => {
  it('is true for objects', () => {
    expect(Utils.isObject({})).to.equal(true)
  })

  it('is true for functions', () => {
    expect(Utils.isObject(() => {})).to.equal(true)
  })

  it('is false for non-objects', () => {
    expect(Utils.isObject('asdf')).to.equal(false)
  })
})

describe('Utils.isDate', () => {
  it('is true for dates', () => {
    expect(Utils.isDate(new Date())).to.equal(true)
  })

  it('is false for other objects', () => {
    expect(Utils.isDate({})).to.equal(false)
  })
})

describe('Utils.isDefined', () => {
  it('is false for null', () => {
    expect(Utils.isDefined(null)).to.equal(false);
  })

  it('is false for undefined', () => {
    expect(Utils.isDefined(undefined)).to.equal(false);
  })

  it('is true for 0', () => {
    expect(Utils.isDefined(0)).to.equal(true);
  })
})

describe('Utils.isPromise', () => {
  it('is false for objects not containing then', () => {
    expect(Utils.isPromise({})).to.equal(false)
  })

  it('is true for objects containing then', () => {
    expect(Utils.isPromise({then: () => {}})).to.equal(true)
  })

  it('is true for Promise', () => {
    const a = new Promise(() => {})
    expect(Utils.isPromise(a)).to.equal(true)
  })
})

describe('Utils.isString', () => {
  it('is false for non-string', () => {
    expect(Utils.isString(1234)).to.equal(false)
  })

  it('is true for string', () => {
    expect(Utils.isString('asdf')).to.equal(true)
  })
})

describe('Utils.isJqueryElement', () => {
  it('is true for an object with jquery string', () => {
    expect(Utils.isJqueryElement({jquery: 'asdf'})).to.equal(true)
  })

  it('is false for an object', () => {
    expect(Utils.isJqueryElement({})).to.equal(false)
  })
})

describe('Utils.isArray', () => {
  it('is true for an array', () => {
    expect(Utils.isArray([1, 2, 3])).to.equal(true)
  })

  it('is false for an object', () => {
    expect(Utils.isArray({})).to.equal(false)
  })
})

describe('Utils.isHash', () => {
  it('is true for an Object ', () => {
    expect(Utils.isHash({})).to.equal(true)
  })

  it('is false for a function', () => {
    expect(Utils.isHash(() => {})).to.equal(false)
  })

  it('is false for an array', () => {
    expect(Utils.isHash([])).to.equal(false)
  })
})

describe('Utils.unique', () => {
  it('returns given value when not array', () => {
    const uniq = Utils.unique('asdf')
    expect(uniq).to.equal('asdf')
  })

  it('fetches uniques', () => {
    const uniq = Utils.unique([1, 2, 2, 3, 4, 4, 5])
    expect(uniq).to.have.length(5)
    expect(uniq).to.include.members([1, 2, 3, 4, 5])
  })
})

describe('Utils.contains', () => {
  it('returns false for undefined', () => {
    const contains = Utils.contains(null, 'someval')
    expect(contains).to.equal(false)
  })

  it('searches an array', () => {
    const contains = Utils.contains(['someval', 'otherval'], 'someval')
    expect(contains).to.equal(true)
  })

  it('searches an object', () => {
    const contains = Utils.contains({some: 'val'}, 'some')
    expect(contains).to.equal(true)
  })
})

describe('Utils.capitalize', () => {
  it('capitalizes a string', () => {
    expect(Utils.capitalize('someval')).to.equal('Someval')
  })

  it('returns the val when not string', () => {
    const obj = {}
    expect(Utils.capitalize(obj)).to.equal(obj)
  })

  it('returns empty string', () => {
    expect(Utils.capitalize('')).to.equal('')
  })
})

