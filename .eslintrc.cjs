module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@next/next/no-img-element': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}