
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()
  const menu = [
    { name: "Home", path: "/" },
    { name: "Pizza", path: "/category/pizza" },
    { name: "Burgers", path: "/category/burgers" },
    { name: "Drinks", path: "/category/drinks" },
    { name: "Desserts", path: "/category/desserts" },
  ];

  const handleLogout =()=>{
    localStorage.removeItem("signup")
    navigate("/")
  }

  return (
    <div className="w-full h-24 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white hidden lg:flex justify-between items-center lg:px-10 px-4 shadow-md">
      <div>
        <h2 className="text-2xl font-bold tracking-wide">Foodie 🍴</h2>
      </div>

      <div className="flex gap-6">
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
      </div>

      <div className="flex gap-4 items-center">
        <p className="cursor-pointer font-medium hover:underline">Profile</p>
        <button onClick={handleLogout} className="px-4 py-2 bg-white text-red-600 font-semibold rounded-md shadow hover:bg-gray-100 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
