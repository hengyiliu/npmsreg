import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavMenu />
      <Container>{children}</Container>
    </>
  );
};

export { Layout };
