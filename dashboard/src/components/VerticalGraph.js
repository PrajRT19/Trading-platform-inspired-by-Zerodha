import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}



//AI

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// // ✅ REQUIRED REGISTRATION
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const VerticalGraph = ({ data }) => {
//   return (
//     <div style={{ height: "400px" }}>
//       <Bar
//         data={data}
//         options={{
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               position: "top",
//             },
//             title: {
//               display: true,
//               text: "Holdings",
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };
