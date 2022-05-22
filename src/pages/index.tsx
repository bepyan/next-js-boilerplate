import Button from '@components/Button';
import Layout from '@components/Layout';
import { useLogout } from '@hooks';
import { withUserSesstionSSR } from '@middlewares';
import { SSRProps } from '@types';

export const getServerSideProps = withUserSesstionSSR(async ({ user }) => {
  return {
    props: { user },
  };
});

export default function Page({ user }: SSRProps<typeof getServerSideProps>) {
  const logout = useLogout();

  return (
    <Layout title="대시보드" className="relative h-full px-4 pt-32">
      <div className="flex items-end">
        <div>
          <h1 className="text-xl font-bold text-stone-500">{user.name ?? '익명'}</h1>
          <span>{user.uid}</span>
        </div>
        <div className="ml-auto">
          <Button kind="secondary" size="normal" {...logout}>
            로그아웃
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <div>생성한 컨텐츠가 없습니다.</div>
      </div>

      <div className="absolute inset-x-4 bottom-32">
        <Button>컨텐츠 생성하기</Button>
      </div>
    </Layout>
  );
}
