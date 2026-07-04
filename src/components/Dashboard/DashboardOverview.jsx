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

  const wardrobeValue = clothes.reduce(
    (sum, item) => sum + Number(item.purchasePrice || 0),
    0
  );

  const totalWear = clothes.reduce(
    (sum, item) => sum + Number(item.wearCount || 0),
    0
  );

  const favourites = clothes.filter(
    (item) => item.favorite
  ).length;

  return (

    <div className="space-y-10">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white p-10 shadow-xl">

        <h1 className="text-4xl md:text-5xl font-bold">
          🌿 WearWise Dashboard
        </h1>

        <p className="mt-4 text-lg leading-8 text-green-100 max-w-2xl">
          Track clothing usage, reduce fashion waste and understand your wardrobe through useful analytics.
        </p>

      </div>

      {/* Analytics */}

      <div className="grid lg:grid-cols-3 gap-6 mt-8 mb-10">

        <div className="bg-green-50 rounded-2xl border border-green-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

          <p className="text-gray-700 font-semibold tracking-wide uppercase">
            Most Worn
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {mostWorn ? mostWorn.name : "--"}
          </h2>

        </div>

        <div className="bg-green-50 rounded-2xl border border-green-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

          <p className="text-gray-700 font-semibold tracking-wide uppercase">
            Favourite Items
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {favourites}
          </h2>

        </div>

        <div className="bg-green-50 rounded-2xl border border-green-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

          <p className="text-gray-700 font-semibold tracking-wide uppercase">
            Average Wear
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-3">
            {averageWear}
          </h2>

        </div>

      </div>

      {/* Stat Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 mt-6">

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
          title="Wardrobe Value"
          value={`₹${wardrobeValue}`}
          icon={<MdSavings />}
          color="#3b82f6"
        />

        <StatCard
          title="Total Wears"
          value={totalWear}
          icon={<PiTrendUpBold />}
          color="#8b5cf6"
        />

        <StatCard
          title="Favourites"
          value={favourites}
          icon={<FaLeaf />}
          color="#ec4899"
        />

      </div>

    </div>

  );
}

export default DashboardOverview;