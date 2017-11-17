import chai from 'chai';
import Publisher from '../src/publisher';
import PubSub from '../src/pub-sub';
import Subscriber from '../src/subscriber';

const { assert } = chai;

describe('PubSub', () => {
  describe('subscriber gets published event', () => {
    const pb = new PubSub();
    const sub = new Subscriber(pb);
    const pub = new Publisher(pb);

    pub.publishEventName();

    it('should have handled one event', () => {
      assert.equal(sub.handledEvents.length, 1);
    });

    it('should have an action property', () => {
      assert.equal(sub.handledEvents[0].action, 'eventName');
    });

    it('should have an info property', () => {
      assert.equal(sub.handledEvents[0].info, 'this is some info');
    });
  });
});
