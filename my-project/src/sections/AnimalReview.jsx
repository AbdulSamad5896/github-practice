import React from 'react';
import { useState } from 'react';
import Animal from '../components/Animal';
import { animalsList } from '../constants';

const AnimalReview = () => {

    const [animals, setAnimals] = useState([]);

    function addAnimal(){
        if(animals.length < animalsList.length){
            let currentAnimals = [...animals, animalsList[animals.length]];
            setAnimals([...currentAnimals]);
        }
    }


  return (
    <div className='flex justify-center items-center p-8 h-screen bg-slate-50'>
      <div className='w-[700px] h-[500px] bg-slate-100 rounded-2xl shadow-2xl flex flex-col '>
        <div className='p-5 text-center bg-slate-200'>
            <h1 className='text-2xl font-bold font-mono'>Animal Review Section</h1>
        </div>
        <div className='  flex flex-col flex-grow p-3 gap-7'>
            <div className='flex justify-center'>
                <button className='bg-white px-4 py-2 text-xl font-mono font-bold rounded-xl' onClick={() => (addAnimal())}>Add Animal</button>
            </div>
            
            {/* Animal Container */}
            <div className='  flex flex-grow flex-wrap justify-around'>

                {
                    animals.map((animal, index) => (
                        <Animal imgURL={animal} key={index}/>
                    ))
                }
                

            </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalReview
