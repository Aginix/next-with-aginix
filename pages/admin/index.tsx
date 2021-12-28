import { useRequireAuth } from '@/hooks';
import { useSession } from 'next-auth/react';

const AdminIndexPage = () => {
  useRequireAuth();

  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
};

export default AdminIndexPage;
