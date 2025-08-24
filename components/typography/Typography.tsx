import * as React from 'react';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  testId: string;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { className, style, testId, children, ...otherProps } = props;

  return React.createElement('article', {
    className,
    style,
    'data-testid': testId,
    ...otherProps,
    children,
  });
};

export default Typography;
