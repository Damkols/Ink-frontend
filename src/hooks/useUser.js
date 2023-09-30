const useUser = () => {
 useEffect(() => {
  const init = async () => {
   try {
    const { provider, contract: inkContract } = await initEthereum();
    setContract(inkContract);

    // Check if the current user is registered
    const userAddress = await provider.getSigner().getAddress();
    const userData = await inkContract.getUser(userAddress);

    if (userData.status === 1) {
     setIsRegistered(true);
    }
   } catch (error) {
    setError(error);
   } finally {
    setLoading(false);
   }
  };

  init();
 }, []);
};

export default useUser;
