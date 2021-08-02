import { ShipsReducer, initialStarShipsResponseDestination } from './ships.reducer';

describe('Ships Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = ShipsReducer(initialStarShipsResponseDestination, action);

      expect(result).toBe(initialStarShipsResponseDestination);
    });
  });
});
