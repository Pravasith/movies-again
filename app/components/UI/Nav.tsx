import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <Link href="/">
      <nav className="flex justify-center m-8">
        <Image
          src="/impro-ai-logo.png"
          width={200}
          height={100}
          alt="Impro AI Logo"
        />
      </nav>
    </Link>
  );
};

export default Nav;
