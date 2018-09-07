App.prototype.initAbi = function () {

     this.abi = [
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": false,
                     "name": "sender",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "name": "senderDescription",
                     "type": "string"
                 },
                 {
                     "indexed": false,
                     "name": "receiver",
                     "type": "address"
                 },
                 {
                     "indexed": false,
                     "name": "receiverDescription",
                     "type": "string"
                 },
                 {
                     "indexed": true,
                     "name": "boxId",
                     "type": "uint256"
                 },
                 {
                     "indexed": false,
                     "name": "location",
                     "type": "string"
                 },
                 {
                     "indexed": false,
                     "name": "timestamp",
                     "type": "uint256"
                 }
             ],
             "name": "Send",
             "type": "event"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_to",
                     "type": "address"
                 },
                 {
                     "name": "_origin",
                     "type": "string"
                 },
                 {
                     "name": "_location",
                     "type": "string"
                 }
             ],
             "name": "produce",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 },
                 {
                     "name": "_description",
                     "type": "string"
                 }
             ],
             "name": "registerMember",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 },
                 {
                     "name": "_description",
                     "type": "string"
                 },
                 {
                     "name": "_location",
                     "type": "string"
                 }
             ],
             "name": "registerProducer",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "anonymous": false,
             "inputs": [
                 {
                     "indexed": true,
                     "name": "boxId",
                     "type": "uint256"
                 },
                 {
                     "indexed": false,
                     "name": "producerDescription",
                     "type": "string"
                 },
                 {
                     "indexed": false,
                     "name": "origin",
                     "type": "string"
                 },
                 {
                     "indexed": false,
                     "name": "location",
                     "type": "string"
                 }
             ],
             "name": "Produce",
             "type": "event"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 }
             ],
             "name": "removeMember",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 }
             ],
             "name": "removeProducer",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 },
                 {
                     "name": "_description",
                     "type": "string"
                 }
             ],
             "name": "setMember",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 },
                 {
                     "name": "_description",
                     "type": "string"
                 },
                 {
                     "name": "_location",
                     "type": "string"
                 }
             ],
             "name": "setProducer",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_stopped",
                     "type": "bool"
                 }
             ],
             "name": "setStopped",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "constant": false,
             "inputs": [
                 {
                     "name": "_to",
                     "type": "address"
                 },
                 {
                     "name": "_location",
                     "type": "string"
                 },
                 {
                     "name": "_boxId",
                     "type": "uint256"
                 }
             ],
             "name": "transfer",
             "outputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "function"
         },
         {
             "inputs": [],
             "payable": false,
             "stateMutability": "nonpayable",
             "type": "constructor"
         },
         {
             "constant": true,
             "inputs": [
                 {
                     "name": "_addr",
                     "type": "address"
                 }
             ],
             "name": "getMember",
             "outputs": [
                 {
                     "name": "",
                     "type": "address"
                 },
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
                     "name": "_addr",
                     "type": "address"
                 }
             ],
             "name": "getProducer",
             "outputs": [
                 {
                     "name": "",
                     "type": "address"
                 },
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
                     "type": "uint256"
                 }
             ],
             "name": "items",
             "outputs": [
                 {
                     "name": "id",
                     "type": "uint256"
                 },
                 {
                     "name": "origin",
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
                 }
             ],
             "name": "members",
             "outputs": [
                 {
                     "name": "addr",
                     "type": "address"
                 },
                 {
                     "name": "description",
                     "type": "string"
                 },
                 {
                     "name": "exists",
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
                 }
             ],
             "name": "producers",
             "outputs": [
                 {
                     "name": "addr",
                     "type": "address"
                 },
                 {
                     "name": "description",
                     "type": "string"
                 },
                 {
                     "name": "location",
                     "type": "string"
                 },
                 {
                     "name": "exists",
                     "type": "bool"
                 }
             ],
             "payable": false,
             "stateMutability": "view",
             "type": "function"
         }
     ];
};