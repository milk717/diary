import {PageLayout} from '../../../shared/ui/page-layout.tsx';
import {Dayjs} from 'dayjs';
import {WeekTable} from './week-table.tsx';
import {WeeklyTitle} from './title.tsx';
import {Nav} from '../../../shared/ui/nav.tsx';
import {LineBox} from '../../../shared/ui/line-box.tsx';
import {Checklist} from '../../../shared/ui/checklist.tsx';
import {WeeklyMiniCalendar} from './mini-calendar.tsx';

interface Props {
  date: Dayjs;
}

const Page = ({date}: Props) => {
  return (
    <PageLayout id={date.format('YYYY-MM-DD-dd')}>
      <Nav monthNumber={date.month() + 1} />
      <WeeklyTitle date={date} />
      <div className="grid grid-cols-12">
        <div className="col-span-2 border-r border-b border-slate-200">
          <div className="flex justify-between bg-indigo-50 p-2 border-b border-slate-200">
            <WeeklyMiniCalendar date={date} />
          </div>
          <Checklist
            title="Weekly Start Checklist"
            contents={['일주일 목표 작성하기', 'Action Item 작성하기']}
          />
          <Checklist
            title="Weekly End Checklist"
            contents={['일주일 회고하기', '      ']}
          />
        </div>
        <div className="grid grid-cols-3 col-span-10">
          <LineBox
            lineCnt={5}
            title="Obective"
            description="오늘 이뤄야 할 목표에 대해 적어보자"
          />
          <LineBox
            lineCnt={5}
            title="Action Item"
            description="목표를 이루기 위한 행동을 적어보자"
          />
          <LineBox
            className="border-r-0"
            lineCnt={5}
            title="Feedback"
            description="오늘의 목표 달성을 점검해보자"
          />
        </div>
      </div>
      <WeekTable date={date} />
    </PageLayout>
  );
};

export {Page as WeeklyPage};
