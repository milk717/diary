import {Dayjs} from 'dayjs';
import {getWeekOfMonth, getWeekRange} from '../../shared/utils/date.ts';
import {ChevronLeft, ChevronRight, TreePalm} from 'lucide-react';
import {cn} from '../../shared/utils/style.ts';

interface Props {
  date: Dayjs;
}

const Title = ({date}: Props) => {
  const week = getWeekOfMonth(date);

  return (
    <div className="flex items-center border-b-slate-200 border-b text-slate-700">
      <div className="flex items-center justify-between bg-indigo-50 py-2 px-8 w-[577.23px] border-r border-r-slate-200">
        <a href={`#${date.subtract(1, 'week').format('YYYY-MM-DD-dd')}`}>
          <ChevronLeft className={cn('stroke-slate-500')} />
        </a>
        <div className="flex flex-col justify-center gap-y-0.5 items-center">
          <p className="text-xl font-semibold">
            {date.format('YY.MM')}&nbsp; Week {week}
          </p>
          <p className="text-[10px] text-slate-500">{getWeekRange(date)}</p>
        </div>
        <a href={`#${date.add(1, 'week').format('YYYY-MM-DD-dd')}`}>
          <ChevronRight className={cn('stroke-slate-500')} />
        </a>
      </div>
      <div className="flex items-center px-4 gap-1.5">
        <TreePalm className="stroke-slate-700" />
        <p className="font-medium">Goals</p>
      </div>
    </div>
  );
};

export {Title as WeeklyTitle};
