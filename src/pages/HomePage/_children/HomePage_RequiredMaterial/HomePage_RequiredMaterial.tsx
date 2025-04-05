import { classNames } from "primereact/utils";
import HomePage_BoxTemplate from "../HomePage_BoxTemplate";
import { useHomePage_RequiredMaterial } from "./useHomePage_RequiredMaterial.hook";
import { EmptyIcon } from "src/assets/icons";

interface HomePage_RequiredMaterialProps {}

export default function HomePage_RequiredMaterial({}: HomePage_RequiredMaterialProps) {
  const { currentSort, onChangeTimeSort, displayData } =
    useHomePage_RequiredMaterial();

  return (
    <HomePage_BoxTemplate
      title="Nguyên vật liệu cần mua"
      sortValue={currentSort}
      onChangeSortValue={onChangeTimeSort}
      wrapperClassnames="bg-white h-full shadow-md max-h-full rounded-2xl overflow-hidden"
      extendHeaderClassnames="px-4 py-6"
      sortType="time"
    >
      <div className="w-full overflow-hidden bg-white h-full max-h-[552px]">
        <div className="bg-[#F3F4F6] font-semibold text-xs text-[#52575E] w-full h-[48px] py-2 flex items-center ">
          <div className="w-[64px] px-2 shrink-0">STT</div>
          <div className="flex-grow text-start px-2">Nguyên vật liệu</div>
          <div className="w-[100px] text-start px-2 shrink-0">Đơn vị tính</div>
          <div className="w-[100px] px-2 shrink-0">Số lượng</div>
        </div>
        <div className="overflow-y-auto max-h-[504px]">
          {displayData.length === 0 ? (
            <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
              <EmptyIcon />
              <p className="font-medium text-2xl text-[#52575E]">
                Chưa có dữ liệu
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {displayData.map((ele, index) => {
                const { id, amount, code, name, note, unit, avatar } = ele;
                return (
                  <div
                    key={id}
                    className={classNames(
                      "font-semibold text-sm text-[#141522] w-full flex items-center",
                      {
                        "border-t border-[#F3F3F4]": index !== 0,
                      }
                    )}
                  >
                    <div className="w-[64px] px-2 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-grow px-2 py-4 flex items-center justify-start overflow-hidden">
                      <div className="flex gap-2 items-center">
                        <img
                          src={avatar || "images/material_avatar.png"}
                          alt={name}
                        />
                        <div className="flex flex-col overflow-hidden gap-1 items-start text-start">
                          <p className="truncate text-sm">{name}</p>
                          <p className="font-normal text-[#667085] text-[10px]">
                            {note || "(none)"}
                          </p>
                          <p className="text-[#3276FA] font-normal text-[10px]">
                            {code}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100px] px-2 flex-shrink-0">{unit}</div>
                    <div className="w-[100px] px-2 flex-shrink-0">{amount}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </HomePage_BoxTemplate>
  );
}
