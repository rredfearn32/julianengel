import { Raleway } from '@next/font/google';

const raleway = Raleway({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string | JSX.Element | React.ReactFragment;
  classNames?: string;
};

export const Heading = ({ level, text, classNames }: HeadingProps) => {
  const HeadingLevel = level;
  const classes = `${classNames || ''} ${raleway.className}`.trim();
  return <HeadingLevel className={classes}>{text}</HeadingLevel>;
};
