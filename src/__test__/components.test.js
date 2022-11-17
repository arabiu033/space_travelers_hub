import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Rocket from '../pages/Rocket';
import Missions from '../pages/Missions';
import Header from '../components/Header';
import Profile from '../pages/Profile';
import Spinner from '../components/Spinner';

it('render correctly Rocket component', () => {
  const rocket = renderer.create(<Rocket />).toJSON();
  expect(rocket).toMatchSnapshot();
});

it('render correctly Header component', () => {
  const header = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
  expect(header).toMatchSnapshot();
});

it('render correctly Missions component', () => {
  const missions = renderer.create(<Missions />).toJSON();
  expect(missions).toMatchSnapshot();
});

it('render correctly Profile component', () => {
  const profile = renderer.create(<Profile />).toJSON();
  expect(profile).toMatchSnapshot();
});

it('render correctly Spinner component', () => {
  const spinner = renderer.create(<Spinner />).toJSON();
  expect(spinner).toMatchSnapshot();
});
