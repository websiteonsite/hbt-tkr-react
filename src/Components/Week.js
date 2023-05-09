import React from 'react';
import { Link } from 'react-router-dom';
import Day from './Day'
import { useSelector } from 'react-redux';


const Week = () => {
   
    let habitsState= useSelector((state)=>state.habits);
    let habit ={}
    
    for(let i=0;i<habitsState.length;i++){
        if(habitsState[i].id===Number(localStorage.getItem('id'))){
            habit=habitsState[i];
        }
    }

    return (
    <div className='Week' >
        <h1 className="text-center">{habit.name}</h1>
        <div className="days-container">
            {habit.weekLog.map((day,index)=><Day day={day} key={index}/>)}
        </div>
        <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <button className='btn btn-danger' type='button'>
                <Link to="/" class="btn btn-danger">Back</Link>

            </button>
        </div>
    </div>
  )
}

export default Week