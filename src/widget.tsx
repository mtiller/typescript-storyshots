import * as React from 'react';

export interface SampleWidgetProps {
    name: string;
}

export class SampleWidget extends React.Component<SampleWidgetProps, {}> {
    render() {
        return <div><h1>Hello {this.props.name}</h1></div>;
    }
}