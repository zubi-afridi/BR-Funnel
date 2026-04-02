import { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
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

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 bg-[#0B0F1A]/80 backdrop-blur-xl transition-all duration-300 border-b border-[#B9B9B9]">
      <Container className="flex justify-between items-center h-16 md:h-18 lg:h-20 xl:h-24 ">
        {/* Logo Section */}

        <div className="shrink-0">
          <a
            href="/"
            className="text-3xl font-semibold tracking-wider text-gradient-blue hover:opacity-80 transition-opacity cursor-pointer"
          >
            BR FUNNELS
          </a>
        </div>

        {/* Desktop Navigation - Semantic nav & ul */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center md:space-x-4 lg:space-x-10 list-none m-0 p-0">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm lg:text-lg font-medium text-[#E4E4E4]! leading-[24px] hover:text-white transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute rounded -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#793FEE] to-[#26FDFE] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Section - Desktop */}
        <div className="hidden md:block">
          <Button className="flex items-center gap-2 group md:px-[16px]! md:py-[8px]! lg:px-[30px]! lg:py-[13px]! rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!">
            <PhoneIcon className="text-md lg:text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide text-sm lg:text-base">Book a Call</span>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={showDrawer}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </Container>

      <Drawer
        title={
          <div className="flex justify-between items-center w-full px-2">
            <span className="text-[24px] font-semibold tracking-wider text-gradient-blue">
              BR FUNNELS
            </span>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        width={320}
        closeIcon={
          <CloseOutlined
            style={{ color: "white" }}
            className="hover:rotate-90 transition-transform"
          />
        }
        styles={{
          mask: { backdropFilter: "blur(4px)" },
          header: {
            background: "#050b17",
            borderBottom: "1px solid #B9B9B9",
            padding: "24px",
          },
          body: { background: "#050b17", padding: "20px 0" },
        }}
      >
        <ul className="flex flex-col list-none m-0 p-0">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={onClose}
                className="block px-8 py-4 text-lg font-medium text-[#E4E4E4]! hover:text-[#E4E4E4]! hover:bg-white/5 transition-all border-b border-white/5"
              >
                {item.label}
              </a>
            </li>
          ))}
          <div className="px-8 mt-8">
            <Button
              onClick={onClose}
              className="flex items-center justify-center gap-2 group w-full px-[30px]! py-[13px]! rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!"
            >
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
