import {PageLayout} from '../../shared/ui/page-layout.tsx';
import {Nav} from '../../shared/ui/nav.tsx';
import {MonthlyTitle} from './title.tsx';
import {Calendar} from './calendar.tsx';
import {CURRENT_YEAR} from '../../shared/constants.ts';
import {Checklist} from '../../shared/ui/checklist.tsx';
import {LineBox} from '../../shared/ui/line-box.tsx';

interface Props {
  monthNumber: number;
}

const Page = ({monthNumber}: Props) => {
  return (
    <PageLayout id={`${CURRENT_YEAR}-${monthNumber}`}>
      <Nav monthNumber={monthNumber}></Nav>
      <MonthlyTitle monthNumber={monthNumber} />
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <Checklist
            className="border-b border-slate-200"
            title="Monthly Start Checklist"
            contents={[
              '한달 목표 정하기',
              'Action Item 작성하기',
              '루틴 세우기',
              '약속, Event 기록하기',
            ]}
          />
          <LineBox
            className="border-r-0"
            title="Objective"
            description="이번 달에 이루고 싶은 목표에 대해 적어보자"
            lineCnt={6}
          />
          <LineBox
            className="border-r-0"
            title="Action Item"
            description="목표를 이루기 위한 행동을 적어보자"
            lineCnt={6}
          />
          <Checklist
            className="border-b border-slate-200 h-full"
            direction="row"
            title="Monthly Start Checklist"
            contents={['한달 목표 달성 점검하기', '루틴 실천 점검하기']}
          />
        </div>
        <div className="col-span-5">
          <Calendar monthNumber={monthNumber} />
        </div>
      </div>
    </PageLayout>
  );
};

export {Page as MonthlyPage};
