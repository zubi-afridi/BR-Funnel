import { theme, type ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  algorithm: [theme.darkAlgorithm],
  token: {
    colorPrimary: "var(--brand-500)",
    colorInfo: "var(--brand-500)",
    colorSuccess: "#4ade80",
    colorWarning: "#fbbf24",
    colorError: "#fb7185",
    colorBgBase: "#050b17",
    colorBgContainer: "rgba(11, 20, 40, 0.88)",
    colorTextBase: "#f7f8ff",
    colorTextSecondary: "rgba(235, 241, 255, 0.72)",
    colorBorder: "rgba(122, 138, 255, 0.18)",
    borderRadius: 14,
    wireframe: false,
    fontFamily: "'Poppins', ui-sans-serif, system-ui, sans-serif",
    boxShadowSecondary: "0 18px 60px rgba(0, 0, 0, 0.24)",
  },
  components: {
    Layout: {
      bodyBg: "transparent",
      footerBg: "transparent",
      headerBg: "transparent",
    },
    Button: {
      borderRadius: 999,
      primaryShadow: "none",
      controlHeight: 46,
      paddingInline: 20,
      defaultBg: "rgba(10, 17, 33, 0.78)",
      defaultBorderColor: "rgba(121, 145, 255, 0.18)",
      defaultHoverBg: "rgba(16, 25, 46, 0.92)",
      defaultHoverBorderColor: "rgba(121, 145, 255, 0.3)",
      defaultColor: "#f6f8ff",
    },
    Card: {
      colorBgContainer: "rgba(10, 17, 33, 0.82)",
    },
    Tag: {
      borderRadiusSM: 999,
      defaultBg: "rgba(93, 72, 255, 0.12)",
      defaultColor: "#d5dcff",
    },
    Input: {
      activeBorderColor: "var(--brand-500)",
      hoverBorderColor: "rgba(88, 188, 255, 0.78)",
      activeShadow: "0 0 0 2px rgba(88, 188, 255, 0.14)",
    },
  },
};
