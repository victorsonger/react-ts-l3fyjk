import useSWR from 'swr';
import qs from 'qs';

let other = 1;

const str = (page) => {
  console.log('重新发起请求', page);
  other++;
  return qs.stringify({
    code: 'utf-8',
    q: `${page}`,
  });
};

const fetcher = (page) =>
  fetch(`https://suggest.taobao.com/sug?${str(page)}`).then((res) =>
    res.json()
  );

export function useMock(pageNo) {
  const { data, error, isValidating } = useSWR(pageNo, fetcher, {
    revalidateOnMount: true,
  });

  console.log('data--', data);
  console.log('error--', error?.toString());
  console.log('isValidating---', isValidating);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    isValidating: isValidating,
  };
}

// export default useMock;
