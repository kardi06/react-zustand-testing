import React from 'react'
import './Task.css';
import classNames from 'classnames';

const STATUS = "ONGOING"
export default function Task({title}) {
  return (
    <div className='task'>
        <div>{title}</div>
        <div className='bottomwrapper'>
            <div></div>
            <div className={classNames('status', STATUS)}>{STATUS}</div>
        </div>
    </div>
  )
}
