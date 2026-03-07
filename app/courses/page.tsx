import { CoursesPage } from '../../src/views/CoursesPage';

type CoursesPageRouteProps = {
  searchParams?: {
    query?: string | string[];
  };
};

export default function Page({ searchParams }: CoursesPageRouteProps) {
  const query = Array.isArray(searchParams?.query) ? searchParams?.query[0] : searchParams?.query;

  return <CoursesPage query={query} />;
}
