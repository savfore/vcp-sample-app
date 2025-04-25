import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function getStaticProps({ params }) {
  const pageUrl = '/' + (params?.page?.join('/') || '');
  const page = await builder.get('page', { url: pageUrl }).toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => page.data?.url || '/'),
    fallback: true,
  };
}

export default function CatchAllRoute({ page }) {
  return <BuilderComponent model="page" content={page} />;
}