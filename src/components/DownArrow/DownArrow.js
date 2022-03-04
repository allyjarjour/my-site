import React from 'react'
import './downArrow.scss';

export default function DownArrow({className}) {
  return <div className={`down-arrow ${className || ''}`} />;
}
