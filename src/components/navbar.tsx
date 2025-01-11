import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  favoriteCount: number;
}

const Navbar = ({favoriteCount} : NavbarProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center bg-[#0A0A0A] px-6">
      <img
        src="https://s3-alpha-sig.figma.com/img/ce2c/e613/cbd20ae0a78fff0c801b3cb6c1b80643?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CyYZ4XRc0gJ0j14ttCf-mzOtiAh-DYt7uWiYfDBdJUnCZ2qU3nEXRIKtX96V3KTsCLNGhBdLFpLhvtXVyLFXJVtGpw2hUVfT6dOjTn7H3JHjv6MZdPBz5TQWjf6gcI39gyjX1zeCnKvRfqqEybpeE-cXyjwZv2oOJQKKexWsvzQ~HZ2SCVoM~qwOOF9ZBzyhIaz6rHaJ3xjS8YVK3P5t3hylTFne9zXppmUhw~Ugz-oPAQY~t0J9gix3Qk7tQzxZjT7QUEqJuFnHf4e01nKg-NBYs9meLBHPj-EhRq0bsOwVJtcM6bUupBobPrz~cIi4WlNtsyk2dMpCzDxLkpH8DQ__"
        alt="logo"
        width="114px"
        height="64px"
      />

      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link to="/" className={`flex gap-2 items-center rounded-s-xl p-3 h-[40px] font-[600] ${isActive("/") ? "bg-white text-black" : "bg-transparent text-[#A4A4A4] border border-[#5D5D5D]"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={isActive("/") ? "black" : "#A4A4A4"} className="w-6 h-6">
            <path d="M20.9688 12C20.9688 12.5625 20.5 13 19.9688 13H18.9688L19 18C19 18.0938 19 18.1875 19 18.25V18.75C19 19.4688 18.4375 20 17.75 20H17.25C17.1875 20 17.1562 20 17.125 20C17.0938 20 17.0312 20 17 20H16H15.25C14.5312 20 14 19.4688 14 18.75V18V16C14 15.4688 13.5312 15 13 15H11C10.4375 15 10 15.4688 10 16V18V18.75C10 19.4688 9.4375 20 8.75 20H8H7C6.9375 20 6.90625 20 6.84375 20C6.8125 20 6.78125 20 6.75 20H6.25C5.53125 20 5 19.4688 5 18.75V15.25C5 15.25 5 15.2188 5 15.1875V13H4C3.4375 13 3 12.5625 3 12C3 11.7188 3.09375 11.4688 3.3125 11.25L11.3125 4.25C11.5312 4.03125 11.7812 4 12 4C12.2188 4 12.4688 4.0625 12.6562 4.21875L20.625 11.25C20.875 11.4688 21 11.7188 20.9688 12Z" />
          </svg>
          Início
        </Link>

        <Link to="/favoritos" className={`flex gap-2 items-center rounded-e-xl p-3 h-[40px] font-[600] ${isActive("/favoritos") ? "bg-white text-black" : "bg-transparent text-[#A4A4A4] border border-[#5D5D5D]"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={isActive("/favoritos") ? "black" : "#A4A4A4"} className="w-6 h-6">
            <path d="M5.46875 13.4062C4.53125 12.5312 4 11.2812 4 9.96875V9.8125C4 7.625 5.5625 5.75 7.71875 5.40625C9.15625 5.15625 10.5938 5.625 11.625 6.625L12 7L12.375 6.625C13.375 5.625 14.8438 5.15625 16.25 5.40625C18.4062 5.75 20 7.625 20 9.8125V9.96875C20 11.2812 19.4375 12.5312 18.5 13.4062L12.8438 18.6875C12.625 18.9062 12.3125 19 12 19C11.6562 19 11.3438 18.9062 11.125 18.6875L5.46875 13.4062Z" />
          </svg>
          Favoritos
          <div className={`flex justify-center items-center rounded-full h-[20px] min-w-[20px] px-1 pt-[1px] text-black ${isActive("/favoritos") ? "bg-transparent border border-black" : "bg-white"}`}>
            {favoriteCount}
          </div>
        </Link>
      </div>

    </nav>
  )
};

export default Navbar;