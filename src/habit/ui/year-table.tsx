import {groupDatesByMonth} from '../../shared/utils/date.ts';
import {CURRENT_YEAR} from '../../shared/constants.ts';
import {cn} from '../../shared/utils/style.ts';

export const YearTable = () => {
  const dateList = groupDatesByMonth(CURRENT_YEAR);

  return (
    <div className="w-full h-[calc(210mm_-_258.5px)] flex flex-col">
      {dateList.map((dates, i) => (
        <div key={i} className="flex h-full">
          <p className="flex-1 flex justify-center items-center border-r border-b border-slate-200 font-semibold bg-indigo-50 text-slate-600">
            {dates[0].month() + 1}
          </p>
          <div className="flex w-[1193px] overflow-hidden border-r border-slate-100">
            {[...dates, ...new Array<number>(31 - dates.length).fill(0)].map(
              (date, j) => (
                <div
                  key={j}
                  className={cn(
                    'w-11 h-full border-slate-100 border-b',
                    j !== 0 && 'border-l',
                    j === 34 && 'border-r',
                  )}>
                  {typeof date === 'number' ? null : (
                    <>
                      <a
                        href={`#${date.format('YYYY-MM-DD')}`}
                        className={cn(
                          date.day() === 0
                            ? 'text-pink-400'
                            : date.day() === 6
                              ? 'text-blue-400'
                              : 'text-slate-400',
                          'block text-center text-xs pt-1 border-b border-slate-50',
                        )}>
                        {date.date()}
                      </a>
                      <div className="flex w-full h-full">
                        <div className="flex-1 border-r border-slate-50" />
                        <div className="flex-1" />
                      </div>
                    </>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
