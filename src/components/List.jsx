function List(props) {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-6 rounded-md shadow">
      {props.list.map((item) => (
        <li
          key={item.id}
          className="aspect-square bg-slate-400 rounded-md hover:bg-slate-500 transition"
        >
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex flex-col items-center justify-center text-white p-2"
          >
            <img
              src={import.meta.env.BASE_URL + item.img}
              alt={item.name}
              className="w-20 h-20 mb-2 object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="text-sm font-bold text-center p-2">
              {item.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
