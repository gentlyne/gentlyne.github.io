import { useGetProfileQuery } from 'src/entities/profile/api';

export const useProfile = () => {
  const result = useGetProfileQuery();

  return {
    profile: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
  };
};
