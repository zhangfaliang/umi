/**
 * 错误上报系统
 * https://docs.sentry.io/learn/breadcrumbs/?platform=browsernpm
 */
import * as Sentry from '@sentry/browser';
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://737d8ed9373d4d7aab205698061fe6f8@sentry.io/1297199',
    maxBreadcrumbs: 50,
    // debug: true,
  });
}
