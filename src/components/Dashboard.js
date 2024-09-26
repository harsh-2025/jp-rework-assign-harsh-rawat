import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import React, { useState } from "react";
import Progress from "rsuite/Progress";
import ProgressBar from "@ramonak/react-progress-bar";
import WorldMap from "react-svg-worldmap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import { DotIcon } from "lucide-react";
import useThemeStore from "../store/useThemestore";
import { dataactvspro,data2,data3,cityData,topsellingdata } from "../data/data";
const customIcon = new L.Icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const datapie = {
  labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
  datasets: [
    {
      data: [300.56, 135.18, 154.02, 48.96],
      backgroundColor: ["#1C1C1C", "#b4e3b5", "#9b9bff", "#b4e7ff"],
      // borderWidth: 0, // Disable borders

      // borderColor: '#ffffff', // Background color visible through the gap
      // borderWidth: 2,        // Create space between segments
      // borderRadius: 20,       // Rounded edges for start and end of each segment
      // borderJoinStyle: 'round', // Ensures the corners are rounded
    },
  ],
};
const { labels, datasets } = datapie;
const { data, backgroundColor } = datasets[0];
const options = {
  plugins: {
    legend: {
      display: false, // Disable default legend
    },
    tooltip: {
      callbacks: {
        label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
      },
    },
  },
  cutout: "70%", // Create the hollow effect in the center
  // responsive: true,
  // maintainAspectRatio: false
};

function Dashboard() {
  const [hoveredCity, setHoveredCity] = useState(null);
  const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter

  return (
    <>
      <div className="py-[2.5rem] px-[2.5rem] space-y-[2.5rem] min-w-[1000px] max-w-[1600px]">
        <div className="text-card_heading font-high_heading text-element_color  dark:text-dark_color ">
          eCommerce
        </div>
        <div className="flex flex-row space-x-[2.5rem]">
          <div className="w-1/4 flex flex-col  space-y-[2.5rem] text-mid_heading text-element_color  dark:text-element_color">
            <div className="flex flex-row h-1/2">
              <div className="px-[2rem] py-[2rem] bg-[#e3f5ff] w-full grid grid-cols-2 grid-rows-2  rounded-xl ">
                <div className="text-start font-top_heading ">Customer</div>
                <div className="text-center"></div>
                <div className="text-start text-top_heading font-semibold">3<span className="text-xl">,</span>781</div>
                <div className="text-center flex items-center justify-start ">
                  <span className="text-xs">+11.01%</span>
                  <span className="ml-1 text-xs">
                    <FaArrowTrendUp className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-1/2 ">
              <div className="px-[2rem] py-[2rem] bg-gray_color dark:text-dark_color dark:bg-dark_color_new w-full grid grid-cols-2 grid-rows-2 rounded-xl ">
                <div className="text-start font-top_heading">Revenue</div>
                <div className="text-center"></div>
                <div className="text-start text-top_heading font-semibold "><span className="text-xl">$</span>695</div>
                <div className="text-center flex items-center justify-start">
                  <span className="text-xs">+15.03%</span>
                  <span className="ml-1 text-xs">
                    <FaArrowTrendUp className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col  space-y-[2.5rem] text-mid_heading text-element_color  dark:text-element_color">
            <div className="flex flex-row h-1/2">
              <div className="px-[2rem] py-[2rem] bg-gray_color dark:text-dark_color dark:bg-dark_color_new w-full grid grid-cols-2 grid-rows-2 rounded-xl ">
                <div className="text-start font-top_heading">Orders</div>
                <div className="text-center"></div>
                <div className="text-start text-top_heading font-semibold">1<span className="text-xl">,</span>219</div>
                <div className="text-center flex items-center justify-start">
                  <span className="text-xs">-0.03%</span>
                  <span className="ml-1 text-xs">
                    <FaArrowTrendDown className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row h-1/2">
              <div className="px-[2rem] py-[2rem] bg-[#e5ecf6] w-full grid grid-cols-2 grid-rows-2 rounded-xl">
                <div className="text-start font-top_heading">Growth</div>
                <div className="text-center"></div>
                <div className="text-start text-top_heading font-semibold">
                  30<span className="text-xl">.</span>1<span className="text-xl">%</span>
                </div>
                <div className="text-center flex items-center justify-start">
                  <span className="text-xs">+6.08%</span>
                  <span className="ml-1 text-xs">
                    <FaArrowTrendUp className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="w-1/2 dark:bg-dark_color_new bg-gray_color rounded-xl">
            <div
              className="space-y-[2rem] "
              style={{
                width: "100%",
                height: 300,
                // padding: "20px",
                paddingBottom: "32px",
                // borderRadius: "12px",
                // paddingTop: "16px",
                // paddingLeft: "32px",
                paddingRight:'32px'
              }}
            >
              <h3
                style={{ textAlign: "left" }}
                className="text-mid_heading font-top_heading dark:text-dark_color px-[2rem] pt-[2rem]"
              >
                Projections vs Actuals
              </h3>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={dataactvspro}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  {/* First Bar: Actual */}
                  <Bar
                    dataKey="actual"
                    fill="#a9c5da"
                    barSize={30}
                    stackId="a"
                  />
                  {/* Second Bar: Projected (stacked on top of actual) */}
                  <Bar
                    dataKey="projected"
                    fill="rgba(207,224,235,255)"
                    barSize={30}
                    stackId="a"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-[2.5rem]">
          <div className="flex flex-col w-3/4  dark:bg-dark_color_new bg-gray_color rounded-xl">
            <div className="dark:bg-dark_color_new bg-gray_color rounded-xl px-[2rem] py-[2rem] space-y-[2rem]"
              style={{
                width: "100%",
                height: 500,
               
              }}
            >
              <div className="flex flex-row">
                <div
                  style={{ textAlign: "left" }}
                  className="w-1/5 text-mid_heading font-top_heading  dark:text-dark_color"
                >
                  Revenue
                </div>
                <div className="w-1/8">|</div>
                <div className=" flex w-1/3 pl-8">
                  <DotIcon className="text-element_color" /> Current Week{" "}
                  <span className="font-bold px-2"> $58,211</span>
                </div>
                <div className=" flex w-1/3 pl-8">
                  <DotIcon className="text-dark_blue_color" /> Previous Week{" "}
                  <span className="font-bold px-2"> $68,768</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="90%">
                <LineChart data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  {/* Line for Current Week */}
                  {/* <Line type="monotone" dataKey="current" stroke="#334621" strokeWidth={3} strokeDasharray="500" dot={false} /> */}
                  <Line
                    type="monotone"
                    dataKey="current" // Same data key
                    stroke={darkMode ? "#A78BFA" : "#333333"}
                    strokeWidth={3}
                    strokeDasharray="450,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20" // Dashed style for the rest
                    dot={false}
                    data={data.slice(10)} // Plot from the desired start point for the dash
                  />
                  {/* Line for Previous Week */}
                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#a9c5da"
                    strokeWidth={3}
                    dot={false}
                  />
                  {/* <Line type="monotone" dataKey="current" stroke="#333333" strokeWidth={3} strokeDasharray="10" dot={false} tooltipType="none"/> */}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="dark:bg-dark_color_new bg-gray_color px-[2rem] py-[2rem] rounded-xl">
              <div className="font-top_heading text-mid_heading ">
                Revenue by Location
              </div>
              <div className="py-[2rem] ">
                <MapContainer
                  center={[11.49, 14.65]}
                  zoom={0}
                  style={{ height: "200px", width: "100%" }}
                >
                  {/* OpenStreetMap TileLayer */}
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {/* Map over city data and create a marker for each */}
                  {cityData.map((city, index) => (
                    <Marker
                      key={index}
                      position={city.position}
                      icon={customIcon}
                      eventHandlers={{
                        mouseover: () => setHoveredCity(city.name),
                        mouseout: () => setHoveredCity(null),
                      }}
                    >
                      <Popup>{city.data}</Popup>
                    </Marker>
                  ))}

                  {/* Display hover info (optional) */}
                  {hoveredCity && (
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        padding: "10px",
                        background: "white",
                        borderRadius: "8px",
                      }}
                    >
                      <h3>{hoveredCity}</h3>
                    </div>
                  )}
                </MapContainer>
              </div>
              <div className="space-y-[2rem] ">
                {cityData.map((city) => (
                  <>
                    <div>
                      <div className="flex flex-row text-mid_heading">
                        <div className="w-3/4">{city.name}</div>
                        <div className="w-1/4 ">{city.revenue}</div>
                      </div>
                      <ProgressBar
                        completed={city.percent}
                        height="4px"
                        customLabel=" "
                        bgColor="#a9c5da"
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-[2.5rem] ">
        <div className=" w-3/4 rounded-xl px-[2rem] py-[2rem]  dark:bg-dark_color_new bg-gray_color">
        <div className="space-y-[1rem]">
              <div className="text-mid_heading font-top_heading pb-[1rem]">
                Top Selling Product
              </div>
              <div className="flex flex-row text-gray_color">
                <div className="w-1/3">Name</div>
                <div className="flex flex-row w-2/3">
                  <div className="w-1/3">Price</div>
                  <div className="w-1/3">Quantity</div>
                  <div className="w-1/3">Amount</div>
                </div>
              </div>
              <div className="h-[1px] bg-gray-400"></div>
              <div className="space-y-[2rem] text-element_color dark:text-dark_color">
                {topsellingdata.map((value) => (
                  <div className="flex flex-row text-mid_heading ">
                    <div className="w-1/3">{value.name}</div>
                    <div className="flex flex-row w-2/3">
                      <div className="w-1/3">{value.price}</div>
                      <div className="w-1/3">{value.quantity}</div>
                      <div className="w-1/3">{value.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-1/4 ">
            <div className="dark:bg-dark_color_new bg-gray_color rounded-xl ">
              <div >
                <h3 className="text-mid_heading font-top_heading py-[2rem] px-[2rem]">
                  Total Sales
                </h3>
                
                <div style={{ width: "200px", margin: "auto" }}>                <Pie data={datapie} options={options} />
                </div>
                <div className="py-[2rem] pl-[2rem]">
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      textAlign: "left",
                    }}
                  >
                    <tbody className="text-mid_heading ">
                      {labels.map((label, index) => (
                        <tr key={index}>
                          <td>
                            <span
                              style={{
                                display: "inline-block",
                                width: "8px",
                                height: "8px",
                                backgroundColor: backgroundColor[index],
                                borderRadius: "50%",
                                marginRight: "8px",
                              }}
                            ></span>
                          </td>
                          <td className="py-[1rem]">{label}</td>
                          <td>${data[index]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}
export default Dashboard;
