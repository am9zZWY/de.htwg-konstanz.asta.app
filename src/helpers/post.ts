import { Store, useStore } from "vuex";
import { computed } from "vue";
import { post } from "@/helpers/fetchData";

export default async function get_content_via_post(
  reqtype: string,
  store: Store<any> = useStore()
): Promise<{
  content: any;
  status: number;
}> {
  const username = computed(() => store?.state?.username);
  const password = computed(() => store?.state?.password);

  const body = JSON.stringify({
    username: username.value || "",
    password: password.value || "",
    reqtype: reqtype,
  });

  return await post(body);
}
