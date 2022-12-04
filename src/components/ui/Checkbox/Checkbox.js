import { Checkbox as Ch } from 'antd';
import React from 'react';

function Checkbox({label, className, onChange}) {
  return <Ch onChange={onChange} className={className} >{label}</Ch>
}
export default Checkbox;