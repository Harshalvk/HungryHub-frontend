import Header from "@/components/Header";
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode;
  style?: boolean;
};

const Layout = ({ children, style = true }: Props) => {
  return (
    <div className="">
      <Header />
      <div className={style ? `max-w-7xl mx-auto py-10` : ''}>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
