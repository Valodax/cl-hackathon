import { ConnectButton } from "@web3uikit/web3";

export default function Header() {
  return (
    <nav>
      <h1>Lottery</h1>
      <div>
        <ConnectButton />
      </div>
    </nav>
  );
}
