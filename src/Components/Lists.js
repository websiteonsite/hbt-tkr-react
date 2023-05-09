import React from 'react'
import Home from './Home'

const Lists = ({habits}) => {
  return (
    <div className='Lists'>
        {habits.map((habit)=><Home habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Lists