import React, {useState, useEffect} from 'react';
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { abi } from '../context/CrowdFundingABI'
import { CrowdFundingAddress } from './constants';
const contractABI = abi.abi;
const fetchContract = (signerOrProvider) => new ethers.Contract(CrowdFundingAddress, contractABI, signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");
    const [userIdeas, setUserIdeas] = useState([]);
    
    const createIdea = async (idea) => {
        const { title, description, amount, deadline } = idea;
        const web3modal = new Web3Modal();
        console.log('here1');
        const connection = await web3modal.connect();
        console.log('here2');
        const provider = new ethers.providers.Web3Provider(connection);
        console.log('here3');
        const signer = provider.getSigner();
        console.log('here4', signer);
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

    const getIdeas = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const ideas = await contract.getIdeas();

        const parsedIdeas = ideas.map((idea, i) => ({
            owner: idea.owner,
            title: idea.title,
            description: idea.description,
            target: ethers.utils.formatEther(idea.target.toString()),
            deadline: idea.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(idea.amountCollected.toString()),
            pId: i,
        }))

        return parsedIdeas.reverse();
    }

    const getUserIdeas = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const allIdeas = await contract.getIdeas();
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })

        const currentUser = accounts[0];

        const filteredIdeas = allIdeas.filter((idea) => 
            idea.owner === "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        )

        const userDataPromises = filteredIdeas.map(async (idea, i) => {
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
        location.reload();

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

    const checkIfWalletIsConnected = async () => {
        try {
            if(!window.ethereum)
                return setOpenError(true), setError("Install Metamask");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })

            if(accounts.length) {
                console.log(accounts)
                const account = accounts[0];
                console.log(account);
                setCurrentAccount(account);
                setCurrentAccount(account);
                console.log(currentAccount);
            } else {
                console.log("No account found!");
            }
        } catch(error) {
            console.log("Something went wrong while connecting to the wallet.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, [currentAccount]);

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
            if(!window.ethereum) return console.log("Install MetaMask");
            
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
        } catch(error) {
            console.log("Error while connecting to the account.");
        }
    }

    return(
        <CrowdFundingContext.Provider
            value={{
                titleData,
                currentAccount,
                createIdea,
                getIdeas,
                getUserIdeas,
                donate,
                getDonations,
                connectWallet,
                userIdeas,
            }}
        >
            {children}
        </CrowdFundingContext.Provider>
    );
};

