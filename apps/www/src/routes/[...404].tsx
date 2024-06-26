import { Button } from "@/registry/tailwindcss/ui/button";
import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const NotFound = () => {
  return (
    <>
      <Title>404 Not Found</Title>
      <div class="flex min-h-[calc(100vh-57px-97px)] items-center justify-center">
        <div class="grid gap-4">
          <div class="flex flex-col items-center justify-center">
            <p class="text-6xl font-bold">404</p>
            <p class="text-xl font-medium">Page not found</p>
          </div>
          <p class="opacity-60">This page doesn't exist or was removed!</p>
          <Button as={A} href="/" replace>
            Back to homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
