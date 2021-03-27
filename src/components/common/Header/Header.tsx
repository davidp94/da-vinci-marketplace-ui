import React, { useMemo } from 'react';
import cx from 'classnames';
import { useTranslation } from 'next-i18next';

import { Container } from '@components/ui/Container';
import { Row } from '@components/ui/Row';
import { Button } from '@components/ui/Button';
import { HeaderLink } from '@components/common/Header/HeaderLink';
import DaVinci from '@icons/DaVinci.svg';

import s from './Header.module.sass';

type HeaderProps = {
  className?: string
};

export const Header: React.FC<HeaderProps> = ({
  className,
}) => {
  const { t } = useTranslation(['common']);

  const content = useMemo(() => ([
    {
      href: '/',
      label: t('common:Home'),
    },
    {
      href: '/marketplace',
      label: t('common:Marketplace'),
    },
    {
      href: '/auction',
      label: t('common:Auction'),
    },
    {
      href: '/account',
      label: t('common:My account'),
    },
  ]), [t]);

  return (
    <header className={cx(s.root, className)}>
      <Container>
        <Row>
          <DaVinci className={s.logo} />
          <nav className={s.navigation}>
            {content.map((navLink) => (
              <HeaderLink
                key={navLink.href}
                href={navLink.href}
                className={s.link}
              >
                {navLink.label}
              </HeaderLink>
            ))}
          </nav>
          <div className={s.buttons}>
            <Button theme="green">Create</Button>
            <Button className={s.button}>Connect wallet</Button>
          </div>
        </Row>
      </Container>
    </header>
  );
};
