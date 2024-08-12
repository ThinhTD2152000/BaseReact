import { Layout } from "antd";

const MainLayout = ({ children, style }) => {
  return (
    <div className="bg-white shadow-md" style={style}>
      {children}
    </div>
  );
};

export default MainLayout;
