import * as React from 'react';
import { Button } from 'cloneui';

const Basic: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        gap: 10,
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <Button htmlType="button" size="small" variant="solid" color="primary">
          Small
        </Button>
        <Button htmlType="button" size="default" variant="dashed" color="blue">
          Default
        </Button>
        <Button htmlType="button" size="large" variant="outlined" color="blue">
          Large
        </Button>
      </div>
    </div>
  );
};

export default Basic;
