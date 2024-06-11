import { useMutation } from '@tanstack/react-query';
import { customFetch } from '../utils/helpers';

const sendMessage = async (body) => {
  const res = await customFetch('/demands', 'Demande','POST', JSON.stringify(body));

  console.log(res);

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};

export function useSendMessage() {
  const { mutate, isPending, error, isSuccess, data, reset } = useMutation({
    mutationKey: 'sendMessage',
    mutationFn: (body) => sendMessage(body),
  });
  return { mutate, isPending, error, isSuccess, data, reset };
}
