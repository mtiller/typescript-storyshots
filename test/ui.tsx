import React = require('react');
import { create } from 'react-test-renderer';
import { SampleWidget } from '../src';

test("Say my name, say my name...", () => {
    const tree1 = create(
        <SampleWidget name="Michael" />
    ).toJSON();
    expect(tree1).toMatchSnapshot();
})