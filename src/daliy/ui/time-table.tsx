import {cn} from '../../shared/utils/style.ts';
import {CURRENT_YEAR} from '../../shared/constants.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
}

export const TimeTable = ({monthNumber, dayNumber}: Props) => {
  return (
    <div className="flex flex-col border-r border-slate-200 flex-1">
      {new Array(24).fill(0).map((_, i) => {
        const timeStart = `${CURRENT_YEAR}${String(monthNumber).padStart(2, '0')}${String(dayNumber).padStart(2, '0')}T${String(i + 3).padStart(2, '0')}0000`;
        const timeEnd = `${CURRENT_YEAR}${String(monthNumber).padStart(2, '0')}${String(dayNumber).padStart(2, '0')}T${String(i + 3 + 1).padStart(2, '0')}0000`;

        return (
          <div
            key={i}
            className="h-full grid grid-cols-2 divide-y divide-x divide-slate-100">
            <div className="flex text-slate-500 divide-x divide-slate-100">
              <a
                href={`https://calendar.google.com/calendar/u/0/r/eventedit?action=TEMPLATE&dates=${timeStart}/${timeEnd}`}
                className="flex justify-center items-center w-8 border-r border-slate-200 text-xs">
                {((i + 2) % 12) + 1}
              </a>
              {new Array(6).fill(0).map((_, j) => (
                <div
                  key={j}
                  className={cn('w-8 border-r border-slate-100')}></div>
              ))}
            </div>
            <div className={cn('h-full border-slate-100 border-b')}></div>
          </div>
        );
      })}
    </div>
  );
};
