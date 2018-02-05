import React from 'react';
import { render } from 'react-dom';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import styled from "styled-components"
import {Field} from 'redux-form'
import {Provider} from "react-redux"
import {reduxForm} from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


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


const RangeValues = styled.div`
  display: flex;
  justify-content: space-between;
`


const CurrentValue = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const renderSlider = (props) => (
  <SliderRoot>
  <CurrentValue>
      <p>Current Value from Redux: </p>
      {props.input.value}
      </CurrentValue>
      <Slider 
      handle={handle}
      min={0}
      max={20}
      value={props.input.value} onChange={props.input.onChange}
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
       <RangeValues>
       <p>0</p>
       <p>20</p>
       </RangeValues>
    </SliderRoot>
)

let RangeForm = props => {
  const { handleSubmit } = props
  return <form onSumbit={handleSubmit} >
    <Field name="water" component={renderSlider} type="text"/>
    </form >
}

RangeForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(RangeForm)

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)


const App = () => (
  <div style={styles}>
    <h1>A range component connected to redux forms!</h1>
    <h2>Start sliding to see magic happen! {'\u2728'}</h2>
    <RangeForm/>
  </div>
);

render(<Provider store={store}>
  <App /></Provider>, document.getElementById('root'));
