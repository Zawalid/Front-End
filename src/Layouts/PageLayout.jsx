import { PageTitle } from '../components/ui/PageTitle';
import Section from '../components/ui/Section';

export default function PageLayout({ children, title,image }) {
  return (
    <>
      {title && <PageTitle title={title} image={image} />}
      <Section>{children}</Section>
    </>
  );
}
