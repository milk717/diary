import {PageLayout} from '../../shared/ui/page-layout.tsx';
import {CURRENT_YEAR} from '../../shared/constants.ts';
import {DailyTitle} from './title.tsx';
import {Nav} from '../../shared/ui/nav.tsx';
import {Checklist} from '../../shared/ui/checklist.tsx';
import dayjs from 'dayjs';
import {Box} from '../../shared/ui/box.tsx';
import {LineBox} from '../../shared/ui/line-box.tsx';
import {Frown, Sparkles, ThumbsUp, TreePalm} from 'lucide-react';
import {TimeTable} from './time-table.tsx';
import {MiniCalendar} from '../../shared/ui/mini-calendar.tsx';
import {Icons} from './icons.tsx';

interface Props {
  monthNumber: number;
  dayNumber: number;
}

const Page = ({monthNumber, dayNumber}: Props) => {
  return (
    <PageLayout
      id={dayjs(
        `${CURRENT_YEAR}-${String(monthNumber).padStart(2, '0')}-${String(dayNumber).padStart(2, '0')}`,
      ).format('YYYY-MM-DD')}>
      <Nav monthNumber={monthNumber} />
      <div className="grid grid-cols-12">
        <div className="col-span-5 h-main">
          <DailyTitle monthNumber={monthNumber} dayNumber={dayNumber} />
          <div className="flex">
            <Checklist
              className="border-r border-b border-slate-200 w-2/3"
              title="Morning Journal Checklist"
              contents={[
                '오늘의 목표 작성하기',
                'Action Item 작성하기',
                'Todo / 오늘 할일 작성하기 ',
                '구글 캘린더 / 오늘 일정 체크 및 기록',
              ]}
            />
            <div className="p-3 border-r border-b border-slate-200 w-1/3">
              <div className="flex gap-x-2 items-center">
                <p className="text-sm font-semibold">exercise</p>
                <p className="text-xs text-slate-500">아침 운동 기록</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <LineBox
              title="Obective"
              description="오늘 이뤄야 할 목표에 대해 적어보자"
            />
            <LineBox
              title="Action Item"
              description="목표를 이루기 위한 행동을 적어보자"
            />
          </div>
          <Box
            classNames={{
              base: 'border-b-slate-200 border-b h-full',
              box: 'h-full',
            }}
            title="Feedback"
            description="오늘의 목표 달성을 점검해보자"
          />
        </div>
        <div className="flex flex-col col-span-3 h-main">
          <div className="flex justify-start items-start p-3 gap-1.5 border-b border-r border-slate-200 h-16">
            <TreePalm size={16} className="stroke-slate-700" />
            <p className="font-medium text-sm">Goals</p>
          </div>
          <TimeTable monthNumber={monthNumber} dayNumber={dayNumber} />
        </div>
        <div className="col-span-4 h-[calc(210mm_-_36px)]">
          <div className="flex h-fit">
            <div className="flex-1">
              <Icons monthNumber={monthNumber} dayNumber={dayNumber} />
              <Checklist
                className="border-b border-r border-slate-200"
                title="Night Journal Checklist"
                contents={[
                  '오늘 하루 회고하기',
                  '내일 아침 운동 정하기',
                  '목표 달성 결과 점검하기',
                  '아침에 읽을 책 정하기',
                ]}
              />
            </div>
            <MiniCalendar
              className="border-b border-slate-200"
              monthNumber={monthNumber}
              dayNumber={dayNumber}
            />
          </div>
          <div className="grid grid-rows-3 h-[calc(210mm_-_169px)]">
            <Box
              title="Keep"
              description="오늘 하루 좋았던 일에 대해 적어보자"
              icon={<ThumbsUp className="stroke-slate-700" size={16} />}
              classNames={{base: 'h-full', box: 'h-full'}}
            />
            <Box
              title="Problem"
              description="오늘 하루 아쉬웠던 일에 대해 적어보자"
              icon={<Frown className="stroke-slate-700" size={16} />}
              classNames={{base: 'h-full', box: 'h-full'}}
            />
            <Box
              title="Try"
              description="내일부턴 이렇게 개선해보자!"
              icon={<Sparkles className="stroke-slate-700" size={16} />}
              classNames={{base: 'h-full', box: 'h-full'}}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export {Page as DailyPage};
