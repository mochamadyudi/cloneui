import Paragraph from './Paragraph';
import Text from './Text';
import Title from './Title';
import InternalTypography from './Typography';

type TypographyType = typeof InternalTypography;

type CompoundedComponent = TypographyType & {
  Paragraph: typeof Paragraph;
  Title: typeof Title;
  Text: typeof Text;
};

const Typography = InternalTypography as CompoundedComponent;

Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Text = Text;

if (process.env.NODE_ENV !== 'production') {
  Typography.displayName = 'Typography';
}

export type { TypographyHeadingProps, TypographyLevel } from './interface';
export default Typography;
