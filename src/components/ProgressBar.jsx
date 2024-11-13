
import s from './ProgressBar.module.css';
import {Numbers} from "./Numbers";
import { computeProgressPercentage } from '../computeProgressPercentage';

console.log(s);
console.log(s.wraper);

export function ProgressBar({ thresholds, value }) {
  const maxValue = thresholds[thresholds.length - 1];
  const progressPercentage = computeProgressPercentage(value, thresholds);

  console.log({progressPercentage});


  //const isAchivedValue = value >= threshold ? s.threshold : `${s.threshold} ${s.achived}`; // тернарник для изменения цвета для шкалы.
 //не могу записать в константу потому что нет значения threshold, как это сделать ? 


 const background = `linear-gradient(90deg, #000 0%, #000 ${progressPercentage}, #FFF ${progressPercentage})`;

  return (
    <>
      <div className={s.icons} >
        {thresholds.map(threshold => {
          return (
          <div className={s.icon} >
            {value >= threshold ? '★' : '☆'}
          </div>)
        }).slice(0, -1)}
      </div>
      <div className={s.bar} style={{ background }}>
        {thresholds.map(threshold => {
          return (
            <div
             //className={value >= threshold ? s.threshold : `${s.threshold} ${s.notAchived}`}
             className={s.threshold}
              > 
            </div>
          )
        })}
      </div>
      <Numbers
      thresholds = {thresholds}
      />
      {/* <div className={s.values}>
        {thresholds.map(threshold => <div className={s.value}> {threshold} </div>)}
      </div> */}
    </>



  )
}





// import React from 'react';
// import './ProgressBar.css';

// const ProgressBar = ({ thresholds, value }) => {
//   const maxValue = thresholds[thresholds.length - 1];

//   // Calculate the percentage for the value
//   const percentage = (value / maxValue) * 100;

//   return (
//     <div className="progress-bar-container">
//       <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
//       <div className="progress-thresholds">
//         {thresholds.map((threshold, index) => (
//           <div
//             key={index}
//             className={`threshold ${value >= threshold ? 'achieved' : ''}`}
//             style={{ left: `${(threshold / maxValue) * 100}%` }}
//           >
//             {value >= threshold ? '★' : '☆'}
//           </div>
//         ))}
//         <div className={`trophy ${value === maxValue ? 'achieved' : ''}`} style={{ left: '100%' }}>
//           {value === maxValue ? '🏆' : ''}
//         </div>
//       </div>
//       <div className="progress-info">
//         <span>0</span>
//         <span>{value} / {maxValue}</span>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;

