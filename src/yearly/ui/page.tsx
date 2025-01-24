import {PageLayout} from '../../shared/ui/page-layout.tsx';
import {Nav} from '../../shared/ui/nav.tsx';
import {CURRENT_YEAR} from '../../shared/constants.ts';
import {MiniCalendar} from '../../shared/ui/mini-calendar.tsx';
import {cn} from '../../shared/utils/style.ts';

const Page = () => {
  return (
    <PageLayout id={`${CURRENT_YEAR}`}>
      <Nav currentId="yearly" />
      <div className="grid grid-cols-3 h-[calc(210mm_-_36px)]">
        {new Array(12).fill(0).map((_, i) => (
          <div className="flex border-slate-200 border-b border-r h-full">
            <MiniCalendar size="md" monthNumber={i + 1} dayNumber={-1} />
            <div className={cn('flex-1 grid-bg')} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export {Page as YearlyPage};
