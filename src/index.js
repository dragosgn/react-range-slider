import React from 'react';
import { render } from 'react-dom';
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';

import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <div>
      <Slider 
      handle={handle}
        min={0} max={20} defaultValue={3} 
       />
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
