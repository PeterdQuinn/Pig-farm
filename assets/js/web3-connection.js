let web3, provider, signer;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            web3 = new Web3(window.ethereum);
            // Fetch data and render components
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.error("No Ethereum provider found");
    }
}

document.getElementById("connect-wallet").addEventListener("click", connectWallet);
