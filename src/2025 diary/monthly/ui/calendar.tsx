import {generateCalendar} from '../../../shared/utils/date.ts';
import {CURRENT_YEAR} from '../../../shared/constants.ts';
import {cn} from '../../../shared/utils/style.ts';

interface Props {
  monthNumber: number;
}

export const Calendar = ({monthNumber}: Props) => {
  const [monthDates, extra] = generateCalendar(CURRENT_YEAR, monthNumber);

  return (
    <div className="border-slate-200 border-l border-r h-content">
      <div className="flex justify-between items-center border-b border-slate-200 h-8">
        {new Array(7).fill(0).map((_, i) => (
          <div
            key={i}
            className="flex text-xs font-semibold text-center items-center justify-center text-slate-500 h-8 flex-1">
            {['일', '월', '화', '수', '목', '금', '토'][i]}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 h-[calc(210mm_-_calc(var(--spacing)_*_33))]">
        {monthDates?.map((month, i) =>
          i < 28 ? (
            <div
              key={i}
              className={cn(
                'border-slate-100',
                i % 7 !== 6 ? 'border-b border-r' : 'border-b',
              )}>
              <a
                href={`#${month.date.format('YYYY-MM-DD')}`}
                className={cn(
                  'inline-block w-6 text-center leading-6 mx-2 my-1',
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
          ) : (
            <div
              key={i}
              className={cn(
                'border-slate-100',
                extra?.length && 'grid grid-rows-2',
                i % 7 !== 6 ? 'border-r' : '',
              )}>
              <a
                href={`#${month.date.format('YYYY-MM-DD')}`}
                className={cn(
                  'inline-block w-6 text-center leading-6 mx-2 my-1',
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
              {extra?.length && extra[i - 28].isCurrentMonth ? (
                <div key={i} className="border-t border-slate-200 w-full">
                  <a
                    href={`#${month.date.format('YYYY-MM-DD')}`}
                    className={cn(
                      'inline-block w-6 text-center leading-6 mx-2 my-1',
                      month.isCurrentMonth
                        ? month.isSaturday
                          ? 'text-blue-800'
                          : month.isSunday
                            ? 'text-rose-700'
                            : 'text-slate-700'
                        : 'text-slate-300',
                    )}>
                    {extra[i - 28].date.format('D')}
                  </a>
                </div>
              ) : null}
            </div>
          ),
        )}
      </div>
    </div>
  );
};
