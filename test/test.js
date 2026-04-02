const getWeather = require('./weather');

test('fetch current temperature', async () => {
    const temp = await getWeather();

    expect(typeof temp).toBe('number');
});