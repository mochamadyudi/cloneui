import React from 'react';

import { useStyleContext } from '../../app-provider/StyleContext';

export default function useStyleRegister(
  info: { path: string[]; hashId: string },
  styleFn: () => Record<string, any>[]
) {
  const { cache, container } = useStyleContext();

  return function wrap(node: React.ReactNode) {
    const key = info.path.join('-');
    if (!cache.has(key)) {
      const styleObj = styleFn();
      const css = styleObj
        .map((rule) => {
          return Object.entries(rule)
            .map(([selector, style]) => {
              const body = Object.entries(style as any)
                .map(([prop, val]) => `${prop}: ${val};`)
                .join('');
              return `${selector}{${body}}`;
            })
            .join('');
        })
        .join('');

      if (container) {
        const styleEl = document.createElement('style');
        styleEl.setAttribute('data-css-hash', info.hashId);
        styleEl.innerHTML = css;
        container.appendChild(styleEl);
      }

      cache.add(key);
    }

    return node;
  };
}
