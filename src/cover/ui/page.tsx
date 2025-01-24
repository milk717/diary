import {PageLayout} from '../../shared/ui/page-layout.tsx';
import Cover from '../../assets/cover.png';

export const CoverPage = () => {
  return (
    <PageLayout id="cover">
      <img className="w-full h-full" src={Cover} />
    </PageLayout>
  );
};
