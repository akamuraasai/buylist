const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
}

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
