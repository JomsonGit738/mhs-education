import { PageHero } from '../components/PageHero';
import { TeachersSection } from '../components/TeachersSection';
import { pageHero, teachers } from '../data/content';
import { images } from '../data/images';

export const TeachersPage = () => (
  <>
    <PageHero title={pageHero.teacher.title} breadcrumb={pageHero.teacher.breadcrumb} background={images.bg1} />
    <TeachersSection items={teachers} />
  </>
);
