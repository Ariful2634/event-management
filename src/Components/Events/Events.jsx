import React from 'react';
import laliga from '../Events../../../assets/laliga.jpg'
import ucl from '../Events../../../assets/ucl.jpg'
import euro from '../Events../../../assets/uro.jpg'
import pl from '../Events../../../assets/pl.jpg'
import 'aos/dist/aos.css';

const Events = () => {
    return (
        <div data-aos="fade-up-left">
            <h2 className='text-3xl font-bold text-center text-green-400 mt-20 mb-10'>Upcoming Events We Organized </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            <div className='shadow-xl p-5 w-[450px] rounded-lg'>
               <div>
               <img className='h-[230px] w-full rounded-lg' src={ucl} alt="" />
               </div>
                <p className='text-green-500 font-bold text-center text-2xl mt-2 mb-2'>UEFA Champions League</p>
                <div className='font-bold'>
                    <p>The UEFA Champions League, the pinnacle of European football, brings together the continent's finest clubs in an epic battle for supremacy. Witness footballing legends, jaw-dropping goals, and drama on a grand scale in this prestigious tournament.</p>
                </div>
            </div>
            <div className='shadow-xl p-5 w-[450px] rounded-lg'>
                <div>
                <img className='h-[230px] w-full rounded-lg' src={laliga} alt="" />
                </div>
                <p className='text-green-500 font-bold text-center text-2xl mt-2 mb-2'>Laliga</p>
                <div className='font-bold'>
                    <p>La Liga  a showcase of Spain's footballing brilliance, unites top Spanish clubs for a thrilling spectacle. Experience the passion, skill, and intensity of Spanish football as teams vie for the crown in this premier league competition.</p>
                </div>
            </div>
            <div className='shadow-xl p-5 w-[450px] rounded-lg'>
             <div>
             <img  className='h-[230px] w-full rounded-lg' src={pl} alt="" />
             </div>
                <p className='text-green-500 font-bold text-center text-2xl mt-2 mb-2'>English Premier League</p>
                <div className='font-bold'>
                    <p>Experience the heart-pounding action of the Premier League, where the best teams in England come together to battle for supremacy. With world-class talent, fierce rivalries, and unforgettable moments, the Premier League is football at its finest. Join us as we witness history in the making and crown the champions of English football.</p>
                </div>
            </div>
            <div className='shadow-xl p-5 w-[450px] rounded-lg'>
              <div>
              <img className='h-[230px] w-full rounded-lg' src={euro} alt="" />
              </div>
                <p className='text-green-500 font-bold text-center text-2xl mt-2 mb-2'>UEFA Euro Cup</p>
                <div className='font-bold'>
                    <p>UEFA Euro, the stage where national pride takes center stage, invites Europe's football nations to compete for glory. Embrace the colors of your country and join the fervor as the continent's best teams clash in a tournament that ignites the spirit of unity and competition.</p>
                </div>

            </div>
           
            </div>
            <div className='text-4xl text-center font-bold mt-6 flex justify-center items-center gap-4'>
                <p>Confirm Your Ticket Now!!</p>
                <div>
                <button className='btn btn-success font-bold mb-2'>Book Now</button>
            </div>
            </div>
            
            <hr />
        </div>
    );
};

export default Events;