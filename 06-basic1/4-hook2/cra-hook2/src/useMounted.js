import { useState, useEffect } from 'react';

export default function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // 처음 마운트 됐는지 확인하는 거라 빈배열

  return mounted;
}
