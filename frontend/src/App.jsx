import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Months Analysis",
      },
    },
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/news-count-by-month"
        );
        const responseData = response.data;

        const updatedLabels = responseData.map((item) => item._id); // Extracting month-year labels
        const datasetData = responseData.map((item) => item.count); // Extracting count data

        // Update the state with response data
        setData({
          labels: updatedLabels,
          datasets: [
            {
              label: "News Count by Month",
              data: datasetData,
              fill: false,
              backgroundColor: "rgba(255, 99, 132, 0.5)",
              borderColor: "rgba(255, 99, 132, 1)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}
export default App;
