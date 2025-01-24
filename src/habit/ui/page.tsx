import {PageLayout} from '../../shared/ui/page-layout.tsx';
import {Nav} from '../../shared/ui/nav.tsx';
import {YearTable} from './year-table.tsx';
import {Box} from '../../shared/ui/box.tsx';

const Page = () => {
  return (
    <PageLayout id="routine">
      <Nav currentId="routine" />
      <div className="flex w-full">
        <Box title="Routine" classNames={{base: 'flex-1', box: 'h-52'}} />
        <Box title="Routine" classNames={{base: 'flex-1', box: 'h-52'}} />
      </div>
      <YearTable />
    </PageLayout>
  );
};

export {Page as HabitPage};
