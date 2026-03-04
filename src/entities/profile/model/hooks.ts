import { useGetProfileQuery } from '../../user/api/profileApi';

export const useProfile = () => {
  const result = useGetProfileQuery();

  return {
    profile: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
  };
};
