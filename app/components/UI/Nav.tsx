import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-center m-8">
      <Image
        src="/impro-ai-logo.png"
        width={200}
        height={100}
        alt="Impro AI Logo"
      />
    </nav>
  );
};

export default Nav;
