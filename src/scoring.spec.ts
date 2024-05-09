import { calculateScore, Frame } from './scoring'

describe('test calculations', () => {

  it('should return 0 when no frames are provided', () => {
    const frames: Frame[] = []
    const score = calculateScore(frames)
    expect(score).toBe(0)
  })

})
