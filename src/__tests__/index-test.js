import { getRoute } from '../index'

describe('getRoute', () => {
  it('Should return routes from Kamppi to Steissi', async () => {
    const routes = await getRoute({ from: 'Kamppi', to: 'steissi' })
    expect([4, 5]).toContain(routes.length) // Looks like in the evening the number of routes is 4
  })

  it('Should return only subway routes from Kamppi to Steissi', async () => {
    const routes = await getRoute({ from: 'kamppi', to: 'steissi', transports: ['subway'] })
    routes.forEach((route) => {
      route.legs.forEach((leg) => expect(leg.mode).toMatch(/WALK|SUBWAY/))
    })
  })
})
