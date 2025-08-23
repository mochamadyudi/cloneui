import * as React from 'react';
import { AppProvider, Spin } from 'cloneui';

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
        <Spin size="small" color="blue" spinning />
      </AppProvider>
    </div>
  );
};

export default App;
