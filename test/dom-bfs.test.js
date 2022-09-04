import { JSDOM } from 'jsdom';

import $domBfs from '../src/dom-bfs';

const dom = new JSDOM(`
<div id="root">
  <p id="para>para</p>
  <span id="span>span</span>
</div>
`);
const $root = dom.window.document.querySelector('#root');

QUnit.module('$domBfs');

QUnit.test('should throw error if callback is not a function', function shouldThrowError(assert) {
  assert.expect(1);
  assert.throws(() => $domBfs(dom, ''));
});

QUnit.test('should return null when the target node is not found', function shouldThrowError(assert) {
  assert.expect(1);
  assert.strictEqual($domBfs($root, () => false), null);
});

QUnit.test('should return the node', function shouldThrowError(assert) {
  assert.expect(1);
  assert.strictEqual($domBfs($root, (node) => node.id === 'para'), $root.querySelector('#para'));
});
