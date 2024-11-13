export function computeProgressPercentage(value, thresholds) {
  const totalSegments = thresholds.length;


//   if(value <= thresholds[0]) { //вычисления для первого отрезка;
//     const calc = value / thresholds[0];
//     const calcForAllBar = calc / totalSegments;
//     return calcForAllBar * 100
//   }

  for (let i = 0; i < totalSegments - 1; i += 1) {
    const min = thresholds[i];
    const max = thresholds[i + 1];
    
    if (value <= max ) { // находим в каком отрезке находится value
        
        const lengthSegment = max - min // получаем число до того отрезка где находится value; для того что бы работать с тем отрезком в катором находится value
        const findPartInsideSegment = (value - min) / lengthSegment;   console.log(findPartInsideSegment)
        //console.log(findPartInsideSegment)

        //находим общую шкалу с учетом текущего сегмента
        const completedSegmentsProgress = i / totalSegments; console.log(completedSegmentsProgress, 'completedSegmentsProgress')
        const currentSegmentProgress = findPartInsideSegment / totalSegments; console.log(currentSegmentProgress, 'currentSegmentProgress')
        const totalProgress = completedSegmentsProgress + currentSegmentProgress; console.log(totalProgress, 'totalProgress')
        const result = ( 1/totalSegments + totalProgress) * 100; // делим на единицу что бы узнать сколько сегментов уже заполнено. а после мы их прибавляем к тому сегменту где находится наше вэлью и мы уже вычеслили для него значение в его сегменте, на сколько оно заполнено.
        return `${result.toFixed(2)}%`;
    }
  }
  

  // Если значение больше последнего порога
   return "100%";
}


// export function computeProgressPercentage(value, thresholds) {
//   // if (value >= thresholds[thresholds.length - 1]) {
//   if (value >= thresholds.at(-1)) {
//     return 100;
//   }
//   const currentThresholdIndex = thresholds.findIndex(right => value < right);
//   const left = currentThresholdIndex === 0 ? 0 : thresholds[currentThresholdIndex-1];
//   const right = thresholds[currentThresholdIndex];

//   const currentThresholdProgress = (value - left) / (right - left)

//   const fraction = currentThresholdIndex / thresholds.length + currentThresholdProgress / thresholds.length;

//   return fraction * 100;
// }

// // console.log(0.5 * 0.5)

//                                                         ↓
 console.log(computeProgressPercentage(150, [25, 50, 100, 200, 500, 1000]));

//  console.log(computeProgressPercentage(30, [10, 40]))

// val = 5
// |=====     |            |
// 0          10           40
// 1/2 * 5/10

// val = 30
// |==========|======      |
// 0          10           40
// 1/2 * 5/10

// val = 30
// |==========|=========   |
// 0          10           40
// 1/2 +  1/2 * 20/30;
// 1/2 +  1/2 * (30-10)/(40-10)

// 66.6666666%

// console.log(1/2 +  1/2 * (30-10)/(40-10) * 100);


