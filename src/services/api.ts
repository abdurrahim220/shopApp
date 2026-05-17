const BASE_URL =
  'https://llm-chat-backend-olive.vercel.app/api/v1';

interface FetchOptions extends RequestInit {
  endpoint: string;
}

export const apiRequest = async ({
  endpoint,
  ...options
}: FetchOptions) => {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },

      ...options,
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message || 'Something went wrong',
    );
  }

  return data;
};