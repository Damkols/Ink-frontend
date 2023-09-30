export const supportedChains = [5, 84531];

export const networkInfoMap = {
 5: {
  chainId: `0x${(11155111).toString(16)}`,
  chainName: "Goerli test network",
  rpcUrls: ["https://goerli.infura.io/v3/5b887901bcee46279c3803899a48c5a0"],
  blockExplorerUrls: ["https://goerli.etherscan.io/"],
  nativeCurrency: {
   name: "ETH",
   symbol: "ETH",
   decimals: 18,
  },
 },
 84531: {
  chainId: `0x${(84531).toString(16)}`,
  chainName: "Base Goerli",
  rpcUrls: ["https://base-goerli.public.blastapi.io/"],
  blockExplorerUrls: ["https://goerli.basescan.org/"],
  nativeCurrency: {
   name: "ETH",
   symbol: "ETH",
   decimals: 18,
  },
 },
};

export const defaultReadonlyChainId = 11155111;

export const rpcUrlsMap = {
 11155111: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
 84531: "https://base-goerli.g.alchemy.com/v2/Nm1nL2ueUsq1thAC6Aznm6RnyglPUwKR",
};
