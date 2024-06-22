import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="">
      <Header />
      <div className="max-w-7xl mx-auto py-10 ">{children}</div>
    </div>
  );
};

export default Layout;
