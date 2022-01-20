export const callIfFunction = (maybeFn) =>
  (maybeFn ? (maybeFn && typeof maybeFn === 'function' ? maybeFn() : maybeFn) : null)

export const callWithIfFunction = (maybeFn, props) =>
  (maybeFn ? (maybeFn && typeof maybeFn === 'function' ? maybeFn(props) : maybeFn) : null)
