import React from 'react';
import Layout from '@theme/Layout';
import ProfileCard from '@site/src/components/ProfileCard';
import ClientsSlideshow from "@site/src/components/ClientsSlideshow";

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="The home of delucca's site and blog">
      <main>
        <ProfileCard />
        <ClientsSlideshow/>
      </main>
    </Layout>
  );
}
