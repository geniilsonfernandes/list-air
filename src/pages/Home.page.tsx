import { Container } from '@mantine/core';

import { Glocery, MainLayoutWithSiderbar, Siderbar } from '@/components';
import { Header } from '@/components/Header/Header';

export function HomePage() {
  return (
    <Container>
      <Header />
      <MainLayoutWithSiderbar sidebar={<Siderbar />}>
        <Glocery />
      </MainLayoutWithSiderbar>
    </Container>
  );
}
