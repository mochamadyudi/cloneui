import * as React from 'react';
import { AppProvider, Button } from 'cloneui';

const Basic: React.FC = () => {
  return (
    <AppProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <Button
          type="primary"
          htmlType="button"
          size="small"
          onClick={() => {
            console.log('hahah');
          }}
        >
          Primary
        </Button>
        <Button
          type="default"
          htmlType="button"
          size="small"
          onClick={() => {
            console.log('hahah');
          }}
        >
          Default
        </Button>
        <Button
          type="dashed"
          htmlType="button"
          size="small"
          onClick={() => {
            console.log('hahah');
          }}
        >
          Dashed
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            console.log('hahah');
          }}
        >
          Link
        </Button>
        <Button
          type="danger"
          size="small"
          onClick={() => {
            console.log('hahah');
          }}
        >
          Danger
        </Button>
        <Button
          type="danger"
          size="small"
          disabled
          onClick={() => {
            console.log('hahah');
          }}
        >
          Danger
        </Button>
      </div>
    </AppProvider>
  );
};

export default Basic;
