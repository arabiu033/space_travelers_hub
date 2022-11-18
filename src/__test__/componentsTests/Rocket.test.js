import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rocket from '../../pages/Rocket';
import store from '../../redux/configureStore';

describe('Rockets page tests', () => {
  it('it renders', () => {
    const rockets = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    expect(rockets).toMatchSnapshot();
  });
});
