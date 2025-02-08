import {PageLayout} from '../../../shared/ui/page-layout.tsx';
import {Nav} from '../../../shared/ui/nav.tsx';
import {CURRENT_YEAR} from '../../../shared/constants.ts';
import {cn} from '../../../shared/utils/style.ts';
import {YearlyMiniCalendar} from './mini-calendar.tsx';

const Page = () => {
  return (
    <PageLayout id={`${CURRENT_YEAR}`}>
      <Nav currentId="yearly" />
      <div className="h-main bg-indigo-50 flex items-center p-5">
        <div className="grid grid-cols-3 bg-white flex-1 rounded h-full">
          {new Array(12).fill(0).map((_, i) => (
            <div key={i} className="flex border-slate-200 border-b border-r">
              <div className="p-3 border-r border-slate-50">
                <YearlyMiniCalendar monthNumber={i + 1} dayNumber={-1} />
              </div>
              <div className={cn('flex-1 grid-bg')} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export {Page as YearlyPage};
