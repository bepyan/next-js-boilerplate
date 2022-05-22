import Button from '@components/Button';
import Input from '@components/Input';
import Layout from '@components/Layout';
import { useMutation } from '@hooks';
import { User } from '@prisma/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

type RegisterForm = Pick<User, 'uid' | 'name' | 'pwd'>;

export default function Page() {
  const router = useRouter();
  const navToLogin = () => router.push('/login');

  const registerForm = useForm<RegisterForm>();
  const registerMutation = useMutation({
    url: '/api/users/register',
    onSuccess: () => {
      router.replace('/');
    },
  });

  const onSubmit = registerForm.handleSubmit((form) => {
    if (registerMutation.loading) return;

    registerMutation.mutate(form);
  });

  return (
    <Layout title="회원가입" className="px-4 pt-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-stone-500">NextJS Boilerplate</h1>
      </div>

      <form className="mt-16 space-y-4" onSubmit={onSubmit}>
        <Input
          register={registerForm.register('uid', { required: true })}
          label="아이디"
          autoFocus
          required
        />

        <Input
          register={registerForm.register('pwd', { required: true })}
          type="password"
          label="비밀번호"
          required
        />
        <Input register={registerForm.register('name', { required: true })} label="이름" required />
        {registerMutation.error && (
          <p className="text-red-600">{registerMutation?.error?.message}</p>
        )}
        <Button loading={registerMutation.loading}>회원가입</Button>
        <Button type="button" kind="secondary" onClick={navToLogin}>
          로그인
        </Button>
      </form>
    </Layout>
  );
}
