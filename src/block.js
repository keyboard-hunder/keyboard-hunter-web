const Caver = require("caver-js");
const caver = new Caver('https://api.baobab.klaytn.net:8651/');

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "github_id",
				"type": "string"
			}
		],
		"name": "applyAccount",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "new_address",
				"type": "address"
			}
		],
		"name": "assignAccountToNewAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "new_erc20",
				"type": "address"
			}
		],
		"name": "changeERC20",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "repo",
				"type": "string"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "tags",
				"type": "string"
			},
			{
				"name": "active",
				"type": "bool"
			}
		],
		"name": "editIssueContents",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "editIssuePrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "repo",
				"type": "string"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "tags",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "makeIssue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "uint256"
			},
			{
				"name": "by",
				"type": "address"
			}
		],
		"name": "solve",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "default_erc20",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "erc20",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "githubId",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "issueMadeBy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "issues",
		"outputs": [
			{
				"name": "id",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "repo",
				"type": "string"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "tags",
				"type": "string"
			},
			{
				"name": "price",
				"type": "uint256"
			},
			{
				"name": "solved",
				"type": "bool"
			},
			{
				"name": "active",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "issueSolvedBy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

var contractAddress = '0x99a60B8cf67EE56d67e7cB56875b0C9c40C8E609';
var myContract = new caver.klay.Contract(abi, contractAddress, {
    from: '0x1234567890123456789012345678901234567891', // default from address
    gasPrice: '25000000000' // default gas price in peb, 25 Gpeb in this case
});

var privateKey = '0x8d760d7929139a7c3a993f36169c25596352e7f303c1f923576253af6b2e9f55'; // ONLY FOR SHORT DEVELOP
var myAccount = caver.klay.accounts.privateKeyToAccount(privateKey);
caver.klay.accounts.wallet.add(myAccount);


function loadOpenedIssues(callback) {
    loadIssue(0, callback);
}


function loadIssue(idx, callback) {
    myContract.methods.issues(idx).call({from: contractAddress}, function(error, result) {
        if (result !== undefined) {
            if (callback) callback(result);
            else console.log(result);
            loadIssue(idx + 1);
        }
    });
}


function makeIssue(repoUrl, title, tags, price) {
    myContract.methods.makeIssue(repoUrl, title, tags, price).send({
        from: myAccount.address,
        gas: '500000', // fixed
    }, function(error, transactionHash) {
        console.log(transactionHash);
    });
}


// example
loadOpenedIssues();
// makeIssue("http://test.com22", "testTitle", "tet1/tet2", "1");
