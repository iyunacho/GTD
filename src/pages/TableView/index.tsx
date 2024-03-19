import { useState, EventHandler, ReactNode, React } from 'react';
import './index.css';
import { icons } from '../../assets/images/icons.jsx';

const TableView = () => {
  const Circle = icons.find((icon) => icon.name === 'circle').icon;
  const FullFlag = icons.find((icon) => icon.name === 'flag_full').icon;
  const EmptyFlag = icons.find((icon) => icon.name === 'flag_empty').icon;
  const SelectedArchive = icons.find(
    (icon) => icon.name === 'archive_selected',
  ).icon;
  const Archive = icons.find((icon) => icon.name === 'archive').icon;
  const Search = icons.find((icon) => icon.name === 'search').icon;

  return (
    <div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 h-[1024px] flex flex-col items-start justify-between pt-[28px] px-0 pb-0 border-[solid] border-#ababab border border-[0_1px_0_0]">
        <div className="flex flex-col items-start justify-start gap-[1px]">
          <div className="relative w-[93px] h-[111px] shrink-0">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col items-center justify-center gap-[8px]">
              <div className="w-[47px] h-[47px] shrink-0 flex flex-col items-center justify-center">
                <Circle>+</Circle>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="text-[15px] leading-[12px] font-['Segoe_UI'] font-bold text-[#bd64ff] text-center whitespace-nowrap">
                  Add
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[93px] h-[111px] shrink-0">
            <div className="absolute -translate-y-1/2 left-[2px] top-1/2 w-[5px] h-[111px] bg-[#bd64ff]"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col items-center justify-center gap-[8px]">
              <div className="w-[41px] h-[41px] shrink-0 flex flex-col items-center justify-center">
                <SelectedArchive />
              </div>
              <div className="absolute left-[39px] top-[0px] w-[18px] h-[18px] shrink-0 flex flex-col items-center justify-center py-[3px] px-[5px] bg-[#cc4a31] rounded-[16px]">
                <div className="text-[10px] leading-[10px] font-['Segoe_UI'] font-bold text-[#fff] text-center whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="text-[15px] leading-[12px] font-['Segoe_UI'] font-bold text-[#bd64ff] text-center whitespace-nowrap">
                  Backlog
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[93px] h-[111px] shrink-0">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col items-center justify-center gap-[8px]">
              <div className="w-[41px] h-[41px] shrink-0 flex flex-col items-center justify-center">
                <Archive />
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="text-[15px] leading-[12px] font-['Segoe_UI'] font-bold text-[#8f8e8e] text-center whitespace-nowrap">
                  Backlog
                </div>
              </div>
              <div className="absolute left-[39px] top-[1px] w-[18px] h-[18px] shrink-0 flex flex-col items-center justify-center py-[3px] px-[5px] bg-[#cc4a31] rounded-[16px]">
                <div className="text-[10px] leading-[10px] font-['Segoe_UI'] font-bold text-[#fff] text-center whitespace-nowrap">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[93px] h-[111px] shrink-0">
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 flex flex-col items-center justify-center gap-[8px]">
            <div className="w-[47px] h-[47px] shrink-0 flex flex-col items-center justify-center">
              <Circle />
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="text-[15px] leading-[12px] font-['Segoe_UI'] font-bold text-[#bd64ff] text-center whitespace-nowrap">
                Logo
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[141px] top-[92px] text-[14px] leading-[20px] font-['Segoe_UI'] text-[#8e8e93] whitespace-nowrap">
        3 items
      </div>
      <div className="absolute left-[93px] top-[241px] w-[1347px] flex flex-col items-end justify-start pt-0 pr-[24px] pb-0 pl-[30px] border-[solid] border-#d1d1d1 border border-[1px_0]">
        <div className="w-[1275px] flex flex-col items-end justify-start border-[solid] border-#717171 border border-[0_0_1px]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] py-[10px] px-0">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <input type="checkbox" />
            </div>
            <div className="flex-1 self-stretch flex flex-col items-center justify-center py-0 px-[8px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <div className="flex-1 h-[50px] text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] flex flex-col justify-center">
                  Inbox Zero
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 pr-[200px] pb-0 pl-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] whitespace-nowrap">
                  Project
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] pt-0 pr-[100px] pb-0 pl-[8px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#d4f8d3] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#ede7fb] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#fef1c2] rounded-[5px] overflow-hidden">
                <div className="text-[20px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#cc8449] whitespace-nowrap">
                  10:00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <FullFlag />
            </div>
          </div>
        </div>
        <div className="w-[1275px] flex flex-col items-end justify-start border-[solid] border-#717171 border border-[0_0_1px]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] py-[10px] px-0">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <input type="checkbox" />
            </div>
            <div className="flex-1 self-stretch flex flex-col items-center justify-center py-0 px-[8px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <div className="flex-1 h-[50px] text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] flex flex-col justify-center">
                  Inbox Zero
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 pr-[200px] pb-0 pl-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] whitespace-nowrap">
                  Project
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] pt-0 pr-[100px] pb-0 pl-[8px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#d4f8d3] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#ede7fb] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#fef1c2] rounded-[5px] overflow-hidden">
                <div className="text-[20px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#cc8449] whitespace-nowrap">
                  10:00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <FullFlag />
            </div>
          </div>
        </div>
        <div className="w-[1275px] flex flex-col items-end justify-start border-[solid] border-#717171 border border-[0_0_1px]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[8px] py-[10px] px-0">
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <input type="checkbox" />
            </div>
            <div className="flex-1 self-stretch flex flex-col items-center justify-center py-0 px-[8px]">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <div className="flex-1 h-[50px] text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] flex flex-col justify-center">
                  Inbox Zero
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center pt-0 pr-[200px] pb-0 pl-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#333] whitespace-nowrap">
                  Project
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[10px] pt-0 pr-[100px] pb-0 pl-[8px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#d4f8d3] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#ede7fb] rounded-[20px] overflow-hidden">
                <div className="text-[18px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#222] whitespace-nowrap">
                  Title
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-[15px]">
              <div className="h-[30px] flex flex-row items-center justify-center py-[4px] px-[12px] bg-[#fef1c2] rounded-[5px] overflow-hidden">
                <div className="text-[20px] leading-[20px] tracking-[0em] font-['DM_Sans'] text-[#cc8449] whitespace-nowrap">
                  10:00
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-0 px-[4px]">
              <EmptyFlag />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[131px] top-[48px] flex flex-row items-end justify-start gap-[1054px]">
        <div className="flex flex-row items-center justify-center p-[10px]">
          <div className="text-[40px] leading-[12px] font-['Segoe_UI'] font-bold text-[#bd64ff] text-center whitespace-nowrap">
            Backlog
          </div>
        </div>
        <SelectedArchive />
      </div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-[calc(50%+-345px)] top-[calc(50%+-368px)] w-[468px] h-[40px] bg-[#f1f1f2] rounded-[10px]">
        <div className="absolute -translate-y-1/2 left-[12px] top-1/2 w-[112px] h-[24px] flex flex-row items-center justify-center gap-[8px]">
          <div className="flex flex-row items-center justify-center overflow-hidden">
            <Search />
          </div>
          <div className="w-[76px] text-[20px] leading-[20px] font-['Segoe_UI'] text-[#8e8e93]">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
