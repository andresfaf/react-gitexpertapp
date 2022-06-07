import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <div>GitExpertApp</div>

      <AddCategory setCategories={setCategories} />

      <hr />
        {
          categories.map(category => (
            <GifGrid category={category} key={category} />
          ))
        }
    </>
  )
}



