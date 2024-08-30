"use client";
import { decrement, increment } from '@/redux/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
  const value = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <div>
      <div className='text-primary-dark'>{value}</div>
      <div onClick={() => {
        dispatch(increment())
      }}>+</div>
      <div onClick={() => {
        dispatch(decrement())
      }}>-</div>
    </div>
  );
}
