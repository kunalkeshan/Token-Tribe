import React, {useState, useEffect} from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { abi } from '../context/CrowdFundingABI'

// const { API_KEY } = process.env;

const CrowdFundingAddress = "0xA658ABE797164F3D2989699f980db6847D86a121";
const contractABI = abi.abi;
const fetchContract = (signerOrProvider) => new ethers.Contract(CrowdFundingAddress, contractABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();
const providerOptions = {}

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");
    const [userIdeas, setUserIdeas] = useState([]);
    const [web3Provider, setWeb3Provider] = useState(null);
    const [walletConnected, setWalletConnected] = useState(false);
    
    const createIdea = async (idea) => {
        const { title, description, amount, deadline } = idea;
        const signer = web3Provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);
        try{
            const transaction = await contract.createIdea(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount, 18), 
                new Date(deadline).getTime()
            )

            await transaction.wait();
            console.log(transaction)
            setUserIdeas([...userIdeas, {...idea, pId: userIdeas.length}])

            console.log("contract call success", transaction);
        } catch(error) {
            console.log("contract call failure", error);
        }
    }

    const getUserIdeas = async (address) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allIdeas = await contract.getIdeas();

        // const filteredIdeas = allIdeas.filter((idea) => 
        //     idea.owner === address
        // )

        const userDataPromises = allIdeas.map(async (idea, i) => {
            const donations = await contract.getDonators(i);
            const numberOfDonations = donations[0].length;
            return {
            owner: idea.owner,
            title: idea.title,
            description: idea.description,
            target: ethers.utils.formatEther(idea.target.toString()),
            deadline: idea.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(idea.amountCollected.toString()),
            pId: i,
            numberOfDonations
            }
        })
        const userData = await Promise.all(userDataPromises)

        return userData.reverse();
    }

    const donate = async (pId, amount) => {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        const ideaData = await contract.donateToIdea(pId, {
            value: ethers.utils.parseEther(amount),
        });

        await ideaData.wait();
        return ideaData;
    }

    const getDonations = async (pId) => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];
        for  (let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString()),
            });
        }

        return parsedDonations;
    };

        // const getIdeas = async () => {
    //     const provider = new ethers.providers.JsonRpcProvider();
    //     const contract = fetchContract(provider);

    //     const ideas = await contract.getIdeas();

    //     const parsedIdeas = ideas.map((idea, i) => ({
    //         owner: idea.owner,
    //         title: idea.title,
    //         description: idea.description,
    //         target: ethers.utils.formatEther(idea.target.toString()),
    //         deadline: idea.deadline.toNumber(),
    //         amountCollected: ethers.utils.formatEther(idea.amountCollected.toString()),
    //         pId: i,
    //     }))

    //     return parsedIdeas.reverse();
    // }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!window.ethereum.isConnected()){
                setCurrentAccount(null);
                setWalletConnected(false);
            }
            else {
                setWalletConnected(true);
            }
        } catch(error) {
            setWalletConnected(false);
            console.log("Something went wrong while connecting to the wallet.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    },[walletConnected]);

    useEffect(() => {
		const userIdeasData = getUserIdeas();
		const handleUserIdeasUpdate = async () => {
			const userData = await userIdeasData;
			console.log(userData)
			setUserIdeas(userData)
		}
		handleUserIdeasUpdate();
	}, []);

    const connectWallet = async () => {
        try {
            let web3Modal = new Web3Modal({
                cacheProvider: false,
                providerOptions,
            });

            const web3ModalInstance = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
            if(web3ModalProvider) {
                setWeb3Provider(web3ModalProvider);
            }
            setCurrentAccount(web3Provider.provider.selectedAddress);
            setCurrentAccount(web3Provider.provider.selectedAddress);
        } catch(error) {
            console.log("Error while connecting to the account.");
        }
    }

    useEffect(() => {
        connectWallet();
    }, [currentAccount]);

    return(
        <CrowdFundingContext.Provider
            value={{
                titleData,
                currentAccount,
                createIdea,
                // getIdeas,
                getUserIdeas,
                donate,
                getDonations,
                connectWallet,
                userIdeas,
                setUserIdeas
            }}
        >
            {children}
        </CrowdFundingContext.Provider>
    );
};

