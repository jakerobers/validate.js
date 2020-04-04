import { expect } from 'chai'
import validators from './index'

describe('default export', () => {
  it('has presence', () => {
    expect(validators.presence).to.be.a('function')
  })
})

