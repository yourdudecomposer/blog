import { Checkbox as Ch } from 'antd';
import React from 'react';

const Checkbox = ({label,onChange, className}) => <Ch className={className} onChange={onChange}>{label}</Ch>;
export default Checkbox;