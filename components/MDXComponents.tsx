/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Link from 'next/link';

export const components = {
  a: ({ href = '', ...props }) => {
    if (href.match(/http|https/)) {
      return (
        <a href={href} className="link-btn" target="_blank" rel="noopener noreferrer" {...props} />
      );
    }
    return (
      <Link href={href} passHref>
        <a className="link-btn" {...props} />
      </Link>
    );
  },
  img: ({ children, ...props }: { children: React.ReactNode }) => (
    <div className="my-10">
      <img {...(props as any)} layout="fill" />
    </div>
  )
};
