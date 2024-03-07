import { useMutation } from '@tanstack/react-query';

const sendMessage = async (body) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/demande/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  return res.json();
};

export function useSendMessage() {
  const { mutate, isPending, error, isSuccess, data,reset } = useMutation({
    mutationKey: 'sendMessage',
    mutationFn: (body) => sendMessage(body),
  });
  return { mutate, isPending, error, isSuccess, data,reset };
}

