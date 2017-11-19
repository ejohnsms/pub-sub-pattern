import chai from 'chai';
import Publisher from '../src/publisher';
import PubSubPattern from '../src/pub-sub-pattern';
import Subscriber from '../src/subscriber';

const { assert } = chai;

describe('PubSubPattern', () => {
  describe('subscriber gets published event', () => {
    const pb = new PubSubPattern();
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
