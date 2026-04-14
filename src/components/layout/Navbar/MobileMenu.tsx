import React from "react";
import { Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Button from "../../common/Button";
import { PhoneIcon } from "../../../assets";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeSection: string;
  scrollToSection: (e: React.MouseEvent<any>, item: { href: string; path: string }) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  setOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <MenuOutlined className="text-xl" />
        </button>
      </div>

      {/* DRAWER */}
      <Drawer
        title={
          <span className="text-[28px] font-semibold text-gradient-blue px-2">
            BR FUNNELS
          </span>
        }
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
        <NavLinks
          mobile
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <div className="px-8 mt-8">
          <Button
            onClick={(e) => {
              setOpen(false);
              scrollToSection(e, { href: "#contact", path: "/contact" });
            }}
            padding=""
            className="flex items-center justify-center gap-2 group w-full px-[30px]! py-[13px]! rounded-[10px]! bg-[linear-gradient(90deg,#793FEE_0.05%,#26FDFE_133.43%)]! min-h-0! border-none!"
          >
            <PhoneIcon className="text-xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">Book a Call</span>
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
