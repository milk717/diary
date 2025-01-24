import dayjs, {Dayjs} from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import {cn} from '../../shared/utils/style.ts';
import {generateCalendar, getMonthName} from '../../shared/utils/date.ts';
import {CURRENT_YEAR} from '../../shared/constants.ts';

dayjs.extend(isBetween);

interface Props {
  date: Dayjs;
  className?: string;
}

const MiniCalendar = ({className, date}: Props) => {
  const [monthDates, extra] = generateCalendar(CURRENT_YEAR, date.month() + 1);

  const dateList = [...monthDates, ...(extra?.length ? extra : [])].slice(
    0,
    extra?.length ? 42 : 35,
  );

  // 현재 날짜를 기준으로 해당 주의 시작일과 종료일 계산
  const currentDay = dateList.find(
    month => month.isCurrentMonth && month.date.date() === date.date(),
  );

  const startOfWeek = currentDay?.date.startOf('week');
  const endOfWeek = currentDay?.date.endOf('week');

  return (
    <div
      className={cn(
        'flex justify-center items-center bg-indigo-50 p-1.5',
        className,
      )}>
      <div className="flex flex-col bg-white rounded p-2 gap-y-1">
        <a
          href={`#${CURRENT_YEAR}-${date.month() + 1}`}
          className="text-[0.6rem] font-medium text-center">
          {date.month() + 1} {getMonthName(date.month() + 1)}
        </a>
        <div className="grid grid-cols-7">
          {dateList.map((month, i) => (
            <a
              key={i}
              href={`#${month.date.set('d', 1).format('YYYY-MM-DD-dd')}`}
              className={cn(
                'flex items-center justify-center h-4 w-4',
                i % 7 === 0 && 'rounded-l',
                i % 7 === 6 && 'rounded-r',

                startOfWeek &&
                  endOfWeek &&
                  month.date.isBetween(startOfWeek, endOfWeek, 'day', '[]') &&
                  'bg-indigo-100',
              )}>
              <span
                className={cn(
                  'flex items-center justify-center text-[0.5rem]',
                  month.isCurrentMonth
                    ? month.isSaturday
                      ? 'text-blue-600'
                      : month.isSunday
                        ? 'text-rose-600'
                        : 'text-slate-700'
                    : 'text-slate-300',
                )}>
                {month.date.format('D')}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export {MiniCalendar as WeeklyMiniCalendar};
