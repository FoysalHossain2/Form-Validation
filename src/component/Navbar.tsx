import ThemeSwitch from "./common/ThemeSwitch";

const Navbar = () => {
  return (
    <div className="text-black flex items-center justify-center dark:bg-black dark:text-white pt-4">
      <div className="text-xl cursor-pointer">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
