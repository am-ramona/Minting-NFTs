'use client'

import { useReportWebVitals, ReportHandler } from 'next/web-vitals'
 
export const WebVitals = () => {
  return useReportWebVitals((metric) => {
    console.log(metric)
  })
}

// import { ReportHandler } from 'web-vitals';

// const reportWebVitals = (onPerfEntry?: ReportHandler) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;