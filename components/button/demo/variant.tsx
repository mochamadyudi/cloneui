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
          Solid
        </Button>
        <Button htmlType="button" size="small" variant="outlined" color="blue">
          Outlined
        </Button>
        <Button htmlType="button" size="small" variant="dashed" color="blue">
          Dashed
        </Button>
        <Button htmlType="button" size="small" variant="filled" color="blue">
          Filled
        </Button>
        <Button htmlType="button" size="small" variant="text" color="blue">
          Text
        </Button>
        <Button htmlType="button" size="small" variant="link" color="blue">
          Link
        </Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <Button htmlType="button" size="small" variant="solid" color="purple">
          Solid
        </Button>
        <Button
          htmlType="button"
          size="small"
          variant="outlined"
          color="purple"
        >
          Outlined
        </Button>
        <Button htmlType="button" size="small" variant="dashed" color="purple">
          Dashed
        </Button>
        <Button htmlType="button" size="small" variant="filled" color="purple">
          Filled
        </Button>
        <Button htmlType="button" size="small" variant="text" color="purple">
          Text
        </Button>
        <Button htmlType="button" size="small" variant="link" color="purple">
          Link
        </Button>
      </div>
    </div>
  );
};

export default Basic;
