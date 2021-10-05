import React from 'react';


import {AirbnbExample} from '../js/components/Card';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AirbnbExample',
  component: AirbnbExample,

};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <AirbnbExample/>;
export const Primary = Template.bind({});


