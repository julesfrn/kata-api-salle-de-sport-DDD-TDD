import { expect } from 'chai'
import { say } from '../api'

describe('.say', () => {
  it('should return something', () => {
    expect(say('hello')).to.eq('hello')
  })
})
