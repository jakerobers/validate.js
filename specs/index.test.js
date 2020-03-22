import { expect } from 'chai'
import validate from '../src/index'

describe('validate', () => {
  it('can import the validate function', () => {
    expect(typeof(validate)).to.equal('function')
  })

  // TODO: remove when this is more cleverly architected
  it('has util props', () => {
    expect(Object.keys(validate)).to.include.members([
      'isNumber',
      'isFunction',
      'isInteger',
      'isBoolean',
      'isObject',
      'isDate',
      'isDefined',
      'isPromise',
      'isJqueryElement',
      'isDomElement',
      'isEmpty',
      'format',
      'prettify',
      'isString',
      'isEmpty',
      'stringifyValue',
      'isArray',
      'isHash',
      'contains',
      'unique',
      'capitalize',
    ])
  })
})
