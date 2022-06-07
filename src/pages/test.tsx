import Button from '@components/Button';
import Layout from '@components/Layout';
import { withUserSesstionSSR } from '@middlewares';
import { SSRProps } from '@types';

export const getServerSideProps = withUserSesstionSSR(async ({ user }) => {
  return {
    props: { user },
  };
});

export default function Page({ user }: SSRProps<typeof getServerSideProps>) {
  return (
    <Layout title="테스트" className="relative h-full px-4 pt-32">
      <div>
        <h1 className="text-xl font-bold text-stone-500">{user.name ?? '익명'}</h1>
        <span>{user.uid}</span>
      </div>
    </Layout>
  );
}
