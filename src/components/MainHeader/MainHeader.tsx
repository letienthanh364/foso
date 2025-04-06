import { useMainHeader } from "./useMainHeader.hook";

import { useViewport } from "src/hooks/common/useViewport";
import MainHeader_Mobile from "./_children/MainHeader_Mobile";
import MainHeader_Desktop from "./_children/MainHeader_Desktop";

export default function MainHeader() {
  const useMainHeaderReturns = useMainHeader();
  const isSmall = useViewport().width < 1024;

  return (
    <div className="w-full h-[72px] flex items-center justify-center bg-blue-new text-white">
      {isSmall ? (
        <MainHeader_Mobile mainHeaderProps={useMainHeaderReturns} />
      ) : (
        <MainHeader_Desktop mainHeaderProps={useMainHeaderReturns} />
      )}
    </div>
  );
}
