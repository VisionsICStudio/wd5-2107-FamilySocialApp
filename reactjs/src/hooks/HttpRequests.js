/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

import axios from 'axios';

export function useAxiosGet(url) {
  const [request, setRequest] = useState({
    data: null,
    error: false,
    loading: false,
  });

  useEffect(() => {
    setRequest({
      data: null,
      error: false,
      loading: true,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          data: response.data,
          error: false,
          loading: false,
        });
      })
      .catch(() => {
        setRequest({
          data: null,
          error: true,
          loading: false,
        });
      });
  }, [url]);

  return request;
}
