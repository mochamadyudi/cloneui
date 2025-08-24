import * as React from 'react';
import { AppProvider, Typography } from 'cloneui';

const App: React.FC = () => {
  return (
    <div>
      <AppProvider
        theme={{
          components: {
            Button: {
              iconGap: 10,
              fontWeight: 'normal',
              paddingInline: 10,
            },
          },
          direction: 'rtl',
        }}
      >
        <Typography.Title level={1}>H1 Typography</Typography.Title>
        <Typography.Title level={2}>H2 Typography</Typography.Title>
        <Typography.Title level={3}>H3 Typography</Typography.Title>
        <Typography.Title level={4}>H4 Typography</Typography.Title>
        <Typography.Title level={5}>H5 Typography</Typography.Title>
        <Typography.Title level={6}>H6 Typography</Typography.Title>
      </AppProvider>
    </div>
  );
};

export default App;
