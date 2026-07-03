import {
  FaTshirt,
  FaLeaf,
} from "react-icons/fa";

import {
  MdSavings,
} from "react-icons/md";

import {
  PiTrendUpBold,
} from "react-icons/pi";

import StatCard from "./StatCard";

import {
  getTotalClothes,
  getAverageWear,
  getMostWorn,
  getSustainabilityScore,
} from "../../utils/analytics";

function DashboardOverview({ clothes }) {

  const total = getTotalClothes(clothes);

  const averageWear = getAverageWear(clothes);

  const mostWorn = getMostWorn(clothes);

  const sustainability = getSustainabilityScore(clothes);

  return (

    <div className="mb-16">

      <div className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 rounded-3xl text-white p-10 shadow-xl mb-10">

        <h1 className="text-5xl font-extrabold">
          🌿 WearWise
        </h1>

        <p className="mt-4 text-lg text-green-100 max-w-2xl">

          Build a smarter wardrobe.
          Track clothing usage,
          reduce fashion waste,
          and embrace sustainable living.

        </p>

      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Clothes"
          value={total}
          icon={<FaTshirt />}
          color="#16a34a"
        />

        <StatCard
          title="Sustainability"
          value={`${sustainability}%`}
          icon={<FaLeaf />}
          color="#22c55e"
        />

        <StatCard
          title="Average Wear"
          value={averageWear}
          icon={<MdSavings />}
          color="#3b82f6"
        />

        <StatCard
          title="Most Worn"
          value={
            mostWorn
              ? mostWorn.name
              : "--"
          }
          icon={<PiTrendUpBold />}
          color="#8b5cf6"
        />

      </div>

    </div>

  );

}

export default DashboardOverview;