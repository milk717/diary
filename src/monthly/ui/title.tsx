import {getMonthName} from '../../shared/utils/date.ts';
import {ChevronLeft, ChevronRight, TreePalm} from 'lucide-react';
import {cn} from '../../shared/utils/style.ts';
import {CURRENT_YEAR} from '../../shared/constants.ts';

interface Props {
  monthNumber: number;
}

const Title = ({monthNumber}: Props) => {
  return (
    <div className="flex items-center border-b-slate-200 border-b text-slate-700">
      <div className="flex items-center justify-between bg-indigo-50 py-2 px-8 w-[577.23px] border-r border-r-slate-200">
        <a href={`#${CURRENT_YEAR}-${monthNumber - 1}`}>
          <ChevronLeft
            className={cn(
              monthNumber === 1 ? 'stroke-slate-300' : 'stroke-slate-500',
            )}
          />
        </a>
        <div className="flex flex-col justify-center gap-y-0.5 items-center">
          <p className="text-xl font-semibold">
            {getMonthName(monthNumber)} {CURRENT_YEAR}
          </p>
          <p className="text-[10px] text-slate-500">
            {CURRENT_YEAR}.{String(monthNumber).padStart(2, '0')}
          </p>
        </div>
        <a href={`#${CURRENT_YEAR}-${monthNumber + 1}`}>
          <ChevronRight
            className={cn(
              monthNumber === 12 ? 'stroke-slate-300' : 'stroke-slate-500',
            )}
          />
        </a>
      </div>
      <div className="flex items-center px-4 gap-1.5">
        <TreePalm className="stroke-slate-700" />
        <p className="font-medium">Goals</p>
      </div>
    </div>
  );
};

export {Title as MonthlyTitle};
