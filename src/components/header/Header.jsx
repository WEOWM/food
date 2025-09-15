import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Pizza", path: "/category/pizza" },
    { name: "Burgers", path: "/category/burgers" },
    { name: "Drinks", path: "/category/drinks" },
    { name: "Desserts", path: "/category/desserts" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("signup");
    navigate("/");
  };

  return (
    <header className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white shadow-md">
      <div className="flex justify-between items-center px-4 lg:px-10 h-24">
        <h2 className="text-2xl font-bold tracking-wide">Foodie 🍴</h2>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          {menu.map((item, idx) => (
            <p
              key={idx}
              className="relative cursor-pointer font-medium 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-[2px] after:bg-white 
                         after:transition-all after:duration-300 
                         hover:after:w-full"
            >
              {item.name}
            </p>
          ))}
        </nav>

        {/* Profile & Logout */}
        <div className="hidden lg:flex gap-4 items-center">
          <p className="cursor-pointer font-medium hover:underline">Profile</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-white text-red-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {menu.map((item, idx) => (
              <p
                key={idx}
                className="cursor-pointer font-medium hover:underline"
                onClick={() => {
                  setIsOpen(false);
                  navigate(item.path);
                }}
              >
                {item.name}
              </p>
            ))}
            <p className="cursor-pointer font-medium hover:underline" onClick={() => setIsOpen(false)}>
              Profile
            </p>
            <button
              onClick={handleLogout}
              className="w-full mt-2 px-4 py-2 bg-white text-red-600 font-semibold rounded-md shadow hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
