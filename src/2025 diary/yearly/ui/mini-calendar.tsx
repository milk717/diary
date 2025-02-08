import {CURRENT_YEAR} from '../../../shared/constants.ts';
import {generateCalendar, getMonthName} from '../../../shared/utils/date.ts';
import {cn} from '../../../shared/utils/style.ts';
import {Fragment} from 'react';

interface Props {
  monthNumber: number;
  dayNumber: number;
  className?: string;
}

const MiniCalendar = ({className, monthNumber, dayNumber}: Props) => {
  const [monthDates, extra] = generateCalendar(CURRENT_YEAR, monthNumber);

  const dateList = [...monthDates!, ...(extra?.length ? extra : [])].slice(
    0,
    extra?.length ? 42 : 35,
  );

  return (
    <div
      className={cn(
        'flex flex-col rounded px-1 py-2 gap-y-4 justify-between',
        className,
      )}>
      <div className="flex justify-center items-center flex-1">
        <a
          href={`#${CURRENT_YEAR}-${monthNumber}`}
          className={cn('font-semibold text-center text-sm')}>
          {monthNumber} {getMonthName(monthNumber)}
        </a>
      </div>
      <div
        className={cn(
          'grid grid-cols-8 gap-2',
          dateList.length > 35 ? 'h-28' : 'h-26',
        )}>
        {dateList.map((month, i) => (
          <Fragment key={i}>
            {month.date.day() === 0 ? (
              <a
                href={`#${month.date.add(1, 'd').format('YYYY-MM-DD-dd')}`}
                className="rounded bg-slate-50 text-xs px-0.5 h-4">
                W{Math.floor((i + 1) / 7) + 1}
              </a>
            ) : null}
            <div
              key={i}
              className={cn(
                'flex items-center justify-center rounded h-4 w-4',
                dayNumber === month.date.date() &&
                  month.isCurrentMonth &&
                  'bg-indigo-200',
              )}>
              <a
                href={`#${month.date.format('YYYY-MM-DD')}`}
                className={cn(
                  'flex items-center justify-center text-xs',
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export {MiniCalendar as YearlyMiniCalendar};
