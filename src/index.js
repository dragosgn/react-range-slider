import React from 'react';
import { render } from 'react-dom';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import styled from "styled-components"
import {Field} from 'redux-form'


import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const SliderRoot = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  .rc-slider-dot {
    display: none;
  }
`

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


const Values = styled.div`
  display: flex;
  justify-content: space-between;
`


const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start sliding to see magic happen! {'\u2728'}</h2>
    <SliderRoot>
      <Slider 
      handle={handle}
      min={0}
      max={20}
      defaultValue={3}
      trackStyle={{ backgroundColor: '#9dc217', height: 12, borderRadius: "2px" }}
        handleStyle={{
          borderColor: '#242f40',
          borderWidth: "1px",
          height: 24,
          width: 24,
          marginLeft: -14,
          marginTop: -7,
          backgroundColor: 'white',

        }}
        railStyle={{ backgroundColor: '#d3d3d3', height: 12, borderRadius: "2px" }}
       />
       <Values>
       <p>0</p>
       <p>12</p>
       </Values>
    </SliderRoot>
  </div>
);

render(<App />, document.getElementById('root'));
