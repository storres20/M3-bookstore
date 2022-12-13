import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categories';

function Categories() {
  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* After clicking on "Check Status" button */
  const handleStatus = () => {
    dispatch(checkingStatus());
  };

  /* Load Redux State */
  const status = useSelector((state) => state.status);

  return (
    <div>
      <button type="button" onClick={handleStatus}>Check status</button>
      <h2>{status}</h2>
    </div>
  );
}

export default Categories;
