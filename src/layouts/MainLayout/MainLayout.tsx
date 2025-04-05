import { ReactNode } from "react";
import MainHeader from "../../components/MainHeader";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="relative bg-white w-full justify-between min-h-screen flex flex-col">
      <div className="w-full h-full flex-grow">
        <div className="fixed z-[1000] w-full top-0 h-20 left-0 flex flex-col">
          <MainHeader />
        </div>

        <div className="min-h-screen flex-grow h-full pt-[72px] w-full overflow-auto">
          {children}
        </div>
      </div>
      {/* <MainFooter /> */}
    </div>
  );
}
