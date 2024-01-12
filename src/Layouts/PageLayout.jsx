import { PageTitle } from '../components/ui/PageTitle';
import Section from '../components/ui/Section';

export default function PageLayout({ children, title }) {
  return (
    <>
      <PageTitle title={title} />
      <Section>{children}</Section>
    </>
  );
}
