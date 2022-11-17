import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Profile from '../pages/Profile';
import store from '../redux/configureStore';

describe('Profile page', () => {
  it('it renders', () => {
    const profile = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      )
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
});
