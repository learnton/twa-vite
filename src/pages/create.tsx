import { useNavigate } from "react-router-dom";
import { TonClient, WalletContractV4 } from "@ton/ton";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";
import { useState } from "react";

// import { mnemonicGenerate } from "@zcloak/crypto";

function Create() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Create Client
  const client = new TonClient({
    endpoint: "https://toncenter.com/api/v2/jsonRPC",
  });

  const createWallet = async () => {
    setLoading(true);
    // Generate new key
    let mnemonics = await mnemonicNew();

    // const zkmnemonic = mnemonicGenerate(12);

    let keyPair = await mnemonicToPrivateKey(mnemonics);
    // let keyPair = await mnemonicToPrivateKey(zkmnemonic.split(" "));

    console.log(mnemonics);
    // Create wallet contract
    let workchain = 0; // Usually you need a workchain 0
    let wallet = WalletContractV4.create({
      workchain,
      publicKey: keyPair.publicKey,
    });
    let contract = client.open(wallet);

    // Get balance
    let balance: bigint = await contract.getBalance();
    setLoading(false);
    console.log(`createWallet:${contract.address}, balance: ${balance}`);
  };

  return (
    <>
      <h1>create did and wallet</h1>

      <button disabled={loading} onClick={() => createWallet()}>
        {loading ? "creating" : "create wallet"}
      </button>

      <button onClick={() => navigate("/")}>back</button>
    </>
  );
}

export default Create;
