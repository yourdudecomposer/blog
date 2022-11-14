import { Checkbox as Ch } from 'antd';
import React from 'react';

const Checkbox = ({label, className, onChange}) => <Ch onChange={onChange} className={className} >{label}</Ch>;
export default Checkbox;