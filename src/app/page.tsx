import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      Protected server component
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
