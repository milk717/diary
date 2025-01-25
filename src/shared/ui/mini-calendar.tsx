import {generateCalendar, getMonthName} from '../utils/date.ts';
import {CURRENT_YEAR} from '../constants.ts';
import {cn} from '../utils/style.ts';

interface Props {
  monthNumber: number;
  dayNumber: number;
  size?: 'sm' | 'md';
  className?: string;
}

export const MiniCalendar = ({
  className,
  monthNumber,
  size = 'sm',
  dayNumber,
}: Props) => {
  const [monthDates, extra] = generateCalendar(CURRENT_YEAR, monthNumber);

  const dateList = [...monthDates!, ...(extra?.length ? extra : [])].slice(
    0,
    extra?.length ? 42 : 35,
  );

  return (
    <div
      className={cn(
        'flex justify-center items-center bg-indigo-50',
        size === 'md' ? 'p-3' : 'p-1.5',
        className,
      )}>
      <div
        className={cn(
          'flex flex-col bg-white rounded ',
          size === 'md' ? 'p-3 gap-y-2' : 'p-2 gap-y-1',
        )}>
        <a
          href={`#${CURRENT_YEAR}-${monthNumber}`}
          className={cn(
            'font-medium text-center',
            size === 'md' ? 'text-sm' : 'text-[0.7rem]',
          )}>
          {monthNumber} {getMonthName(monthNumber)}
        </a>
        <div
          className={cn(
            'grid grid-cols-7 ',
            size === 'md' ? 'gap-2' : 'gap-0.5',
          )}>
          {dateList.map((month, i) => (
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
                  size === 'md' ? 'text-xs' : 'text-[0.5rem]',

                  'flex items-center justify-center',
                  month.isCurrentMonth
                    ? month.isSaturday
                      ? 'text-blue-600'
                      : month.isSunday
                        ? 'text-rose-600'
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
