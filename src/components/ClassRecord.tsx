import React from 'react';
import { selectAllClasses } from '../features/classSlice';

export default function ClassRecord ({record}){
  return (
      <div className="classRecord">
        <h3>Name</h3>
        <p>Example: CS 103</p>
        <h3>Students</h3>
        <p>Example: Joe, Jerry, Sid</p>
      </div>
  )
};
