import getRockets from '../../api/index';

describe('FetchMissions', () => {
  test('gets the correct data', async () => {
    const data = await getRockets();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
