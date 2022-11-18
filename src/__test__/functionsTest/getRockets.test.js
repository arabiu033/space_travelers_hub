import * as api from '../../api';

describe('FetchMissions', () => {
  test('gets the correct data', async () => {
    const response = await api.getRockets();
    const { data } = response;
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
