import { expect } from 'chai'
import presence from './presence'

describe('presence', () => {
  it('defaults to use isDefined', () => {
    const err = presence('', {})
    expect(err).to.equal(undefined)
  })

  it('uses isDefined when allowEmpty', () => {
    const err = presence('', { allowEmpty: true })
    expect(err).to.equal(undefined)
  })

  it('does not error for defined output', () => {
    const err = presence('foo', { allowEmpty: true })
    expect(err).to.equal(undefined)
  })

  it('uses isEmpty when allowEmpty==false', () => {
    const err = presence('', { allowEmpty: false })
    expect(err).to.not.equal(undefined)
  })

  it('prefers options.message', () => {
    const err = presence(undefined, { message: 'custom error message' })
    expect(err).to.equal('custom error message')
  })

  it('falls back to a default message', () => {
    const err = presence(undefined, {})
    expect(err).to.equal('can\'t be blank')
  })
})
