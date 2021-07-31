import * as fromShips from './ships.actions';

describe('loadShipss', () => {
  it('should return an action', () => {
    expect(fromShips.loadStarShipResponse().type).toBe('[Ships] Load Shipss');
  });
});
