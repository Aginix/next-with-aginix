import { SessionContextValue, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';

export interface UseRequireAuthProps {
  redirectTo?: string | false;
}

/**
 * ใช้สำหรับเช็คว่า User Logged in เข้าระบบหรือยัง
 * ถ้าหากยังจะ redirect ไปยังหน้า `redirectTo`
 * @param props
 * @returns
 */
export function useRequireAuth(props: UseRequireAuthProps = {}): SessionContextValue['status'] {
  const router = useRouter();
  const { redirectTo = '/auth/login' } = props;
  const { status } = useSession();

  if (status === 'unauthenticated' && redirectTo) {
    router.push(redirectTo);
    return status;
  }

  return status;
}
