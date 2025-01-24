import {PageLayout} from '../../shared/ui/page-layout.tsx';
import {Nav} from '../../shared/ui/nav.tsx';
import {cn} from '../../shared/utils/style.ts';

interface Props {
  id: 'routine' | 'goal' | 'yearly';
}

const Page = ({id}: Props) => {
  return (
    <PageLayout id={id}>
      <Nav currentId={id} />
      <div className={cn('grid-bg h-full w-full')} />
    </PageLayout>
  );
};

export {Page as BlankPage};
