function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="
      group
      bg-green-50
      border border-green-100
      rounded-2xl
      px-5
      py-5
      flex
      items-center
      gap-4
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      hover:bg-white
      transition-all
      duration-300
      min-h-[100px]
      "
    >

      <div
        className="
        w-12
        h-12
        rounded-xl
        flex
        items-center
        justify-center
        text-white
        text-xl
        shrink-0
        group-hover:scale-110
        transition-transform
        duration-300
        "
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="leading-tight">

        <p className="text-sm font-bold uppercase tracking-wide text-gray-700">
          {title}
        </p>

        <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
          {value}
        </h2>

      </div>

    </div>
  );
}

export default StatCard;