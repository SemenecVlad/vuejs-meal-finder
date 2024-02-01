import { Router, useRouter } from "vue-router";

function useNavigation() {
  const router: Router = useRouter();

  const goBack = () => {
    router.go(-1);
  };

  return { goBack };
}

export { useNavigation };
