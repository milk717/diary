import dayjs from 'dayjs';
import {CURRENT_YEAR} from '../../shared/constants.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
}

const Title = ({monthNumber, dayNumber}: Props) => {
  return (
    <div className="flex items-center justify-center bg-indigo-50 border-b-slate-200 border-b text-slate-700 h-16 py-2 px-8 border-r border-r-slate-200">
      <p className="text-xl font-semibold">
        {dayjs(
          `${CURRENT_YEAR}-${String(monthNumber).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`,
        ).format('YY.MM.DD. dddd')}
      </p>
    </div>
  );
};

export {Title as DailyTitle};
