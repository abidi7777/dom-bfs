const noop = () => {};

export default function domBfs($root = null, cb = noop) {
  if (!$root) { return null; }
  if (typeof cb !== 'function') {
    throw new TypeError('callback must be a function');
  }

  const queue = [$root];

  while (queue.length) {
    const { length } = queue;

    for (let i = 0; i < length; i += 1) {
      const $node = queue.shift();

      if (cb($node)) { return $node; }

      // eslint-disable-next-line no-restricted-syntax
      for (const child of $node.childNodes) {
        queue.push(child);
      }
    }
  }

  return null;
}

if (typeof window !== 'undefined') {
  window.$domBfs = domBfs;
}
