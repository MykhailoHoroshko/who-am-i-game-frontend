import { RESPONSE } from '../constants/constants';

function messageConverter(mode, message) {
  if (mode === RESPONSE) {
    if (message === 'YES') {
      return 'Right. Your turn';
    } else if (message === 'NO') {
      return 'Wrong. Passing turn';
    }
  } else {
    return message;
  }
}

export default messageConverter;
