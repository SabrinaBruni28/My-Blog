import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { ChevronDownIcon } from "lucide-react";

function List(props) {
  const [openId, setOpenId] = useState(null);
  const containerRef = useRef(null);

  function toggleItem(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenId(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul
      ref={containerRef}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 p-6 items-start"
    >
      {props.list.map((item) => {
        const isOpen = openId === item.id;

        return (
          <li
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className="relative bg-slate-400 rounded-md hover:bg-slate-500 transition cursor-pointer flex flex-col items-center p-2"
          >
            {/* Seta no canto */}
            <span
              className={`absolute top-2 right-2 text-xs transition-transform duration-300 text-white ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDownIcon />
            </span>

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
            <div className="mt-1 min-h-[2.5rem] flex items-center justify-center px-2">
              <span className="text-xs font-bold text-center line-clamp-2 text-white">
                {item.name}
              </span>
            </div>

            {/* Accordion */}
            {isOpen && (
              <div
                className="mt-2 flex gap-2 flex-wrap justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {item.urls.map((obj) => (
                  <Button
                    key={obj.url}
                    onClick={() => window.open(obj.url, "_blank")}
                  >
                    {obj.name}
                  </Button>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
