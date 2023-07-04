import React, { FC, ReactElement, useContext } from 'react';

import { useTranslation } from 'react-i18next';
import UserContext from '~/context/user-context';
import { ThemeSwitcher } from '~/theme/theme-switcher.component';
import { LanguageSwitcher } from '~/i18n/language-switcher.component';

const Header: FC = (): ReactElement => {
  const { t } = useTranslation();

  const { user } = useContext(UserContext);

  return (
    <header className="header flex justify-between p-10">
      <h1 className="font-bold">
        {t('greeting')}: {user ? user.username : <p>You need to log in!</p>}
      </h1>

      <span className="flex items-center justify-between">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </span>
    </header>
  );
};

export default Header;
