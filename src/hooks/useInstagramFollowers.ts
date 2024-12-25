import { useState, useEffect } from 'react';
import { getInstagramFollowers } from '../services/instagram';

export function useInstagramFollowers() {
  const [followerCount, setFollowerCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchFollowers() {
      try {
        const count = await getInstagramFollowers();
        if (mounted) {
          setFollowerCount(count);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch followers'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchFollowers();
    const interval = setInterval(fetchFollowers, 300000); // 5 minutes

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return { followerCount, loading, error };
}