const useAsync = (asyncFunc, initialParams, immediate = true) => {
  const [loading, setLoading] = useState(immediate);
  const [data, setData] = useState(null);
  const [error, setError] = useRef(null);
  const mountedRef = useRef(true);

  const execute = useMemo(
    () => (params) => {
      setLoading(true);
      return asyncFunc({
        ...initialParams,
        ...params,
      })
        .then((res) => {
          if (!mountedRef.current) return null;
          setData(res);
          setError(null);
          setLoading(false);
          return res;
        })
        .catch((err) => {
          if (!mountedRef.current) return null;
          setError(err);
          setLoading(false);
          throw err;
        });
    },
    [asyncFunc, setData, setError, setLoading]
  );

  useEffect(() => {
    if (immediate) {
      execute(initialParams);
    }
  }, [immediate, execute]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, [mountedRef]);

  return {
    execute,
    loading,
    data,
    error,
  };
};
