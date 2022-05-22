import Button from '@components/Button';
import Input from '@components/Input';
import Layout from '@components/Layout';
import { useMutation } from '@hooks';
import { withRestrictSesstionSSR } from '@middlewares';
import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

export const getServerSideProps = withRestrictSesstionSSR();

type LoginForm = Pick<User, 'uid' | 'pwd'>;

export default function LoginPage() {
  const router = useRouter();
  const navToRegister = () => router.push('/register');

  const loginForm = useForm<LoginForm>();
  const loginMutation = useMutation({
    url: '/api/users/login',
    onSuccess: () => router.replace(`/`),
  });

  const onSubmitLogin = loginForm.handleSubmit((form) => {
    if (loginMutation.loading) return;
    if (loginMutation.error) loginMutation.reset();

    loginMutation.mutate(form);
  });

  return (
    <Layout title="로그인" className="px-4 pt-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-stone-500">NextJS Boilerplate</h1>
      </div>

      <form className="mt-16 space-y-4" onSubmit={onSubmitLogin}>
        <Input
          register={loginForm.register('uid', { required: true })}
          label="아이디"
          autoFocus
          required
        />
        <Input
          register={loginForm.register('pwd', { required: true })}
          type="password"
          label="비밀번호"
          required
        />
        <p className="text-red-600">{loginMutation.error?.message ?? ' '}</p>
        <Button loading={loginMutation.loading}>로그인</Button>
        <Button type="button" kind="secondary" onClick={navToRegister}>
          회원가입
        </Button>
      </form>
    </Layout>
  );
}
