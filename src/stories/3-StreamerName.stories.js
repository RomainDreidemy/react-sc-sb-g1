import React from 'react';
import StreamerName from '../ui/molecules/StreamerName';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Molecules / Streamer name',
    component: StreamerName,
    decorators: [withKnobs],
};

export const Normal = () => <StreamerName 
    text={text("Pseudo", "Skyart")}
    certified={(boolean("Certified", false))}
/>;

export const Certified = () => <StreamerName 
    text={text("Pseudo", "Skyart")}
    certified={(boolean("Certified", true))}
/>;