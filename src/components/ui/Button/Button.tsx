/* eslint-disable react/button-has-type */
import React from 'react';
import Link, { LinkProps } from 'next/link';
import cx from 'classnames';

import s from './Button.module.sass';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  theme?: keyof typeof themeClass
  sizeT?: keyof typeof sizeClass
  external?: boolean
  className?: string
} & (
  | React.HTMLProps<HTMLButtonElement>
  | LinkProps
  | React.HTMLProps<HTMLAnchorElement>
);

const themeClass = {
  purple: s.purple,
  green: s.green,
  blue: s.blue,
};

const sizeClass = {
  small: s.small,
  medium: s.medium,
  large: s.large,
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  theme = 'purple',
  sizeT = 'small',
  external = false,
  className,
  children,
  ...props
}) => {
  const compoundClassName = cx(
    s.root,
    themeClass[theme],
    sizeClass[sizeT],
    className,
  );

  if ('href' in props) {
    if (external) {
      return (
        <a
          target="_blank"
          rel="noreferrer noopener"
          className={compoundClassName}
          {...(props as React.HTMLProps<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link {...(props as LinkProps)}>
        <a className={compoundClassName}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      // @ts-ignore
      type={type}
      {...(props as React.HTMLProps<HTMLButtonElement>)}
      className={compoundClassName}
    >
      {children}
    </button>
  );
};