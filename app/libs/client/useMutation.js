import axios from "axios";
import { useState } from "react";

export default function useMutation(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();
  function mutation(data) {
    setLoading(true);
    axios
      .post(url, data)
      .then((res) => setData(data)) // 응답 데이터만 저장
      .catch((error) => setError(error)) // 에러 메시지만 저장
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
