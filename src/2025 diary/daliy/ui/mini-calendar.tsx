import {generateCalendar, getMonthName} from '../../../shared/utils/date.ts';
import {CURRENT_YEAR} from '../../../shared/constants.ts';
import {cn} from '../../../shared/utils/style.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
  className?: string;
}

export const MiniCalendar = ({className, monthNumber, dayNumber}: Props) => {
  const [monthDates, extra] = generateCalendar(CURRENT_YEAR, monthNumber);

  const dateList = [...monthDates!, ...(extra?.length ? extra : [])].slice(
    0,
    extra?.length ? 42 : 35,
  );

  return (
    <div
      className={cn(
        'flex flex-col justify-between px-2 pb-2 gap-y-1',
        className,
      )}>
      <div className="flex justify-center items-center flex-1">
        <a
          href={`#${CURRENT_YEAR}-${monthNumber}`}
          className={cn('font-semibold text-center text-sm')}>
          {monthNumber} {getMonthName(monthNumber)}
        </a>
      </div>
      <div className="flex flex-col gap-y-2 font-normal">
        <div className="flex text-[0.6rem] justify-between gap-x-1">
          {dateList.map((date, i) =>
            date.date.day() === 1 ? (
              <a
                key={i}
                href={`#${date.date.format('YYYY-MM-DD-dd')}`}
                className="rounded bg-slate-50 px-1 py-0.5">
                W{Math.floor((i + 1) / 7) + 1}
              </a>
            ) : null,
          )}
        </div>
        <div className={cn('grid grid-cols-7 gap-1')}>
          {dateList.map((month, i) => (
            <div
              key={i}
              className={cn(
                'flex items-center justify-center rounded w-4',
                dayNumber === month.date.date() &&
                  month.isCurrentMonth &&
                  'bg-indigo-200',
              )}>
              <a
                href={`#${month.date.format('YYYY-MM-DD')}`}
                className={cn(
                  'flex items-center justify-center text-[0.6rem]',
                  month.isCurrentMonth
                    ? month.isSaturday
                      ? 'text-blue-800'
                      : month.isSunday
                        ? 'text-rose-700'
                        : 'text-slate-700'
                    : 'text-slate-300',
                )}>
                {month.date.format('D')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
