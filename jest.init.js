// import "babel-polyfill" // fix for https://github.com/facebook/jest/issues/3126
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })
