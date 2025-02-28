import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import * as d3 from "d3-scale-chromatic";

const PortfolioPie = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [chartSize, setChartSize] = useState(600); // Default max size

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/portfolio")
      .then((response) => response.json())
      .then((data) => setPortfolio(data.portfolio))
      .catch((error) => console.error("Error fetching data:", error));

    // Adjust chart size based on window width
    const handleResize = () => {
      const newSize = Math.min(window.innerWidth * 0.9, 500); // Max 600px, scales down
      setChartSize(newSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate colors dynamically based on the number of assets
  const colors = portfolio.map((_, index) =>
    d3.interpolateRainbow(index / portfolio.length)
  );

  return (
    <div style={{ width: "100%", textAlign: "center", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Portfolio Allocation</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {portfolio.length > 0 ? (
          <>
            {/* 🔹 Responsive Pie Chart */}
            <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
              <Plot
                data={[
                  {
                    labels: portfolio.map((item) => item.symbol), // ✅ Show only ticker inside chart
                    values: portfolio.map((item) => item.weight),
                    type: "pie",
                    marker: { colors: colors },
                    textinfo: "label+percent",
                  },
                ]}
                layout={{
                  title: "",
                  height: chartSize, // ✅ Responsive size
                  width: chartSize,
                  showlegend: false, // Hide default Plotly legend
                }}
                config={{ displayModeBar: false }}
                style={{ width: "100%" }}
              />
            </div>

            {/* 🔹 Custom Legend */}
            <div
              style={{
                flex: "1",
                minWidth: "250px",
                maxWidth: "350px",
                textAlign: "left",
                //padding: "10px",
              }}
            >
              <h3>Legend</h3>
              {portfolio.map((item, index) => (
                <div
                  key={item.asset}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                    //flexWrap: "wrap",
                    wordBreak: "break-word",
                  }}
                >
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: colors[index],
                      marginRight: 8,
                    }}
                  ></div>
                  <span>{item.asset}</span> {/* ✅ Wraps long text */}
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading portfolio...</p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPie;
