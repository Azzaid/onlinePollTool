import React from 'react';

import Card from './Card';

export default {
    component: Card,
    title: 'Card',
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    cardName: "string",
    cardText: "string",
};

export const Additional = Template.bind({});

Additional.args = {
    cardName: "Other string",
    cardText: "",
};