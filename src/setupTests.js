import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
console.log('Configuring adapter');
configure({ adapter: new Adapter() });