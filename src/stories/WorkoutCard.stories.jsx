import React from 'react';


import WorkoutCard from '../js/components/WorkoutCard';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/WorkoutCard',
  component: WorkoutCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = () => <WorkoutCard />;
export const Primary = Template.bind({});


