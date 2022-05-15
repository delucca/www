import ProfileCard from '@site/src/components/ProfileCard';
import Layout from '@theme/Layout';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <Layout title="Home" description="The home of delucca's site and blog">
      <main>
        <ProfileCard />
      </main>
    </Layout>
  );
}
