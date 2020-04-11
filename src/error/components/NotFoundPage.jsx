import React from 'react';
import ErrorPage from './ErrorPage';
import { useTranslation } from '../../common/hooks';

export default function NotFoundPage() {
  const { t } = useTranslation();
  return <ErrorPage title={t('common/404-page-title')} message={t('common/404-page-content')} />;
}
