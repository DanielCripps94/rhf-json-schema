import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  GET_JSON_SCHEMA,
  getJsonSchema,
} from "~/app/api/get-schema/get-json-schema";
import { Suspense } from "react";
import { LoginForm } from "~/layers/widgets/form-widget";
import { useQueryClient } from "~/layers/shared/hooks/use-query-client/facade";

export default async function Home() {
  const queryClient = useQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_JSON_SCHEMA],
    queryFn: () => getJsonSchema(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 sm:items-start">
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </main>
      </div>
    </HydrationBoundary>
  );
}
