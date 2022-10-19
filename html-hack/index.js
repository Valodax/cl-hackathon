import { ethers } from "./ethers-5.6.esm.min.js";
import { contractAddress, abi } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const fundButton = document.getElementById("fundButton");
const balanceButton = document.getElementById("balanceButton");
connectButton.onclick = connect;
balanceButton.onclick = getBalance;
fundButton.onclick = fund;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "CONNECTED!";
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
  }
}

async function getBalance() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balanceRaw = await provider.getBalance(contractAddress);
    const balance = ethers.utils.formatEther(balanceRaw.toString());
    console.log(balance.toString());
  }
  // provider = ethers.providers.RPCProvider("http://localhost:8545");
  // const balance = await provider.getbalance(address)
}

async function fund() {
  const ethAmount = document.getElementById("ethAmount").value;
  console.log(`Funding with ${ethAmount}...`);
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const transactionResponse = await contract.fund({
        value: ethers.utils.parseEther(ethAmount),
      });
      await transactionResponse.wait(1);
    } catch (error) {
      console.log(error);
    }
  }
}
