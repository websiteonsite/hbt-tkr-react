import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitNotDone } from "../redux/reducers/HabitReducer";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Day = ({day}) => {
  // Today's date
  const today=new Date();
  // Day from today's date
  const todayDay=today.getDay();
  const dispatch=useDispatch();
  const date=new Date(day.yyyy,day.mm,day.dd);
  const done=()=>{
    if(day.id>todayDay){
      // react toast for notification
      toast.warn('You cannot change your next days status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }
    // calling habitDone from reducer
    dispatch(habitDone(day.id));
  }
  const notDone=()=>{
    if(day.id>todayDay){
      toast.warn('You cannot change your next days status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }
    // calling habitNotDone from reducer
    dispatch(habitNotDone(day.id))
  }
  const none=()=>{
    if(day.id>todayDay){
      toast.warn('You cannot change your next days status', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }
    // calling habitNone from reducer
    dispatch(habitNone(day.id));
  }
  
  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={done}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={notDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={none}></i>
      <ToastContainer />
    </div>
  );
};

export default Day;