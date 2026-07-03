function StatCard({ title, value, icon, color }) {
  return (
    <div
className="
bg-gradient-to-br
from-white
to-green-50
rounded-3xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
p-6
border
"

    >
      <div
        className="text-4xl mb-4"
        style={{ color }}
      >
        {icon}
      </div>

     <h3 className="text-green-700 font-semibold uppercase tracking-wider text-sm">
        {title}
      </h3>

      <p className="text-5xl font-extrabold mt-4 text-gray-800">
        {value}
      </p>
    </div>
  );
}

export default StatCard;