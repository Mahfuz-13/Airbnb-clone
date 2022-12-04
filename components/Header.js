import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left side */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://Links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle part */}
      <div></div>
      {/* Right side */}
      <div></div>
      <div></div>
    </header>
  );
};

export default Header;
