import React from 'react';
import { Layout, ApiProvider } from './providers';

const AppProviders = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <ApiProvider>
      <Layout>
          {children}
      </Layout>
    </ApiProvider>
  );
}

export { AppProviders };