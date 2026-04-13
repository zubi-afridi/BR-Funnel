import { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import Button from "../common/Button";
import { PhoneIcon } from "../../assets";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Our Clients", href: "#clients" },
    { label: "Our Process", href: "#process" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <Container variant="nav" className="flex justify-between items-center h-16 md:h-18 lg:h-20">
        <div className="shrink-0">
          <Link to="/" className="text-3xl font-semibold text-gradient-blue hover:opacity-80 transition-opacity">
            BR FUNNELS
          </Link>
        </div>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center md:space-x-4 lg:space-x-10 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm lg:text-lg font-medium text-[#E4E4E4]! hover:text-white transition-all duration-200 relative group">
                  {item.label}
                  <span className="absolute rounded -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#793FEE] to-[#26FDFE] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button className="flex items-center gap-2 group md:px-[16px]! md:py-[8px]! lg:px-[30px]! lg:py-[13px]! rounded-md xl:rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!">
            <PhoneIcon className="text-md lg:text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide text-sm lg:text-base">Book a Call</span>
          </Button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setOpen(true)} className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors" aria-label="Toggle Menu">
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </Container>
      <Drawer
        title={<span className="text-[28px] font-semibold text-gradient-blue px-2">BR FUNNELS</span>}
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
        closeIcon={
          <div className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-white shrink-0">
            <CloseOutlined className="text-lg hover:rotate-90 transition-transform" />
          </div>
        }
        classNames={{
          mask: "backdrop-blur-[4px]",
          header: "bg-[#050b17]! border-b! border-[#B9B9B9]! p-6!",
          body: "bg-[#050b17]! py-5! px-0!",
        }}
      >
        <ul className="flex flex-col list-none m-0 p-0">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={() => setOpen(false)} className="block px-8 py-4 text-lg font-medium text-[#E4E4E4]! hover:text-[#E4E4E4]! hover:bg-white/5 transition-all border-b border-white/5">
                {item.label}
              </a>
            </li>
          ))}
          <div className="px-8 mt-8">
            <Button onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 group w-full px-[30px]! py-[13px]! rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!">
              <PhoneIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="tracking-wide">Book a Call</span>
            </Button>
          </div>
        </ul>
      </Drawer>
    </header>
  );
};
export default Navbar;
