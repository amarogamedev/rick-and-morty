import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0A0A0A]">
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        Início
      </Link>

      <Link to="/favorites">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        Favoritos
      </Link>

      <img className="ml-4"
        src="https://s3-alpha-sig.figma.com/img/ce2c/e613/cbd20ae0a78fff0c801b3cb6c1b80643?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CyYZ4XRc0gJ0j14ttCf-mzOtiAh-DYt7uWiYfDBdJUnCZ2qU3nEXRIKtX96V3KTsCLNGhBdLFpLhvtXVyLFXJVtGpw2hUVfT6dOjTn7H3JHjv6MZdPBz5TQWjf6gcI39gyjX1zeCnKvRfqqEybpeE-cXyjwZv2oOJQKKexWsvzQ~HZ2SCVoM~qwOOF9ZBzyhIaz6rHaJ3xjS8YVK3P5t3hylTFne9zXppmUhw~Ugz-oPAQY~t0J9gix3Qk7tQzxZjT7QUEqJuFnHf4e01nKg-NBYs9meLBHPj-EhRq0bsOwVJtcM6bUupBobPrz~cIi4WlNtsyk2dMpCzDxLkpH8DQ__"
        alt="logo"
        width="114px"
        height="64px"
      />
    </nav>
  )
};

export default Navbar;