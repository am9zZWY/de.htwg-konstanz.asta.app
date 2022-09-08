import { Store, useStore } from "vuex";
import { computed } from "vue";
import { post } from "@/helpers/fetchData";

export async function get_content_via_post(
  reqtype: string,
  store: Store<any> = useStore()
): Promise<{
  content: any;
  status: number;
}> {
  const username = computed(() => store?.state?.username);
  const password = computed(() => store?.state?.password);

  return get_content_via_post_c(reqtype, {
    username: username.value,
    password: password.value,
  });
}

export async function get_content_via_post_c(
  reqtype: string,
  credentials: { username: string; password: string }
): Promise<{
  content: any;
  status: number;
}> {
  const body = JSON.stringify({
    username: credentials.username ?? "",
    password: credentials.password ?? "",
    reqtype: reqtype,
  });

  return await post(body);
}
