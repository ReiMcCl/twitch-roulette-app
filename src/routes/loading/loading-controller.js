import { LOADING_MESSAGES } from '~/helpers/dictionary';

export default {
  name: 'home',
  props: {
    msg: String
  },
  computed: {
    getRandomMessage: function () {
      const i = parseInt(Math.random() * LOADING_MESSAGES.length);
      
      return LOADING_MESSAGES[i];
    }
  }
}