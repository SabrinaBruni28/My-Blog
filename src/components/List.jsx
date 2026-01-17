import Button from "./Button";

function List(props) {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-6 rounded-md shadow">
      {props.list.map((item) => (
        <li
          key={item.id}
          className="aspect-square bg-slate-400 rounded-md hover:bg-slate-500 transition flex flex-col items-center p-2 space-y-2"
        >
          {/* Imagem */}
          <div className="w-20 h-20 flex items-center justify-center">
            <img
              src={import.meta.env.BASE_URL + item.img}
              alt={item.name}
              className="max-w-full max-h-full object-contain"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          {/* Nome */}
          <div className="h-10 flex items-center justify-center px-2">
            <span className="text-xs font-bold text-center line-clamp-2">
              {item.name}
            </span>
          </div>

          {/* Botões */}
          <div className="mt-auto flex gap-2 flex-wrap justify-center">
            {item.urls.map((obj) => (
              <Button
                key={obj.url}
                onClick={() => window.open(obj.url, "_blank")}
              >
                {obj.name}
              </Button>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
