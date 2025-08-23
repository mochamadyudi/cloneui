import { useStyleRegister } from '../../_util';

export default function useStyle(prefixCls: string) {
  const hashId = 'btn';
  const wrapCSSVar = useStyleRegister(
    {
      path: [prefixCls],
      hashId,
    },
    () => [
      {
        [`.${prefixCls}`]: {
          background: 'blue',
          color: 'white',
          padding: '12px',
          'border-radius': '8px',
          '> a': {
            color: 'white',
          },
          '&:disabled > *': {
            background: 'red !important',
            'pointer-events': 'none',
          },
        },
      },
    ]
  );

  const cssVarCls = `${prefixCls}-css-var`;
  return [wrapCSSVar, hashId, cssVarCls] as const;
}
