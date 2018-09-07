pragma solidity ^0.4.24;

contract myCryptoBox {

    struct Member {     // 유통회사 정보
        address addr;
        string description;
        bool exists;
    }

    struct Producer {       // 생산업자 정보
        address addr;
        string description;
        string location;
        bool exists;
    }

    struct Item {           // 박스 정보
        uint id;
        string origin;
    }

    address private owner;
    bool private stopped;

    mapping(address => Member) public members;
    mapping(address => Producer) public producers;
    mapping(uint => Item) public items;

    event Produce(uint indexed boxId, string producerDescription, string origin, string location);
    event Send(address sender, string senderDescription, address receiver, string receiverDescription, uint indexed boxId, string location, uint timestamp);

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    modifier isStopped(){       // Circuit Breaker pattern
        require(!stopped);
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function registerMember(address _addr, string _description) external onlyOwner isStopped {       // 유통회사 등록
        Member storage member = members[_addr];
        if(!member.exists){
            member.addr = _addr;
            member.description = _description;
            member.exists = true;
        }
    }

    function registerProducer(address _addr, string _description, string _location) external onlyOwner isStopped {  // 생산업자 등록
        Producer storage producer = producers[_addr];
        if(!producer.exists){
            producer.addr = _addr;
            producer.description = _description;
            producer.location = _location;
            producer.exists = true;
        }
    }

    function setMember(address _addr, string _description) external onlyOwner isStopped {
        Member storage member = members[_addr];
        require(member.exists);
        member.description = _description;
    }

    function setProducer(address _addr, string _description, string _location) external onlyOwner isStopped {
        Producer storage producer = producers[_addr];
        require(producer.exists);
        producer.description = _description;
        producer.location = _location;
    }

    function removeMember(address _addr) external onlyOwner isStopped {     // 유통회사 삭제
        delete members[_addr];
    }

    function removeProducer(address _addr) external onlyOwner isStopped {   // 생산업자 삭제
        delete producers[_addr];
    }

    function produce(address _to, string _origin, string _location) external isStopped {       // 생산업자가 물건 전송
        Producer memory sender = producers[msg.sender];
        Member memory receiver = members[_to];
        require(sender.exists && receiver.exists);

        uint id = uint(keccak256(now, msg.sender));
        Item storage item = items[id];
        item.id = id;
        item.origin = _origin;

        emit Produce(item.id, sender.description, item.origin, sender.location);
        emit Send(sender.addr, sender.description, receiver.addr, receiver.description, item.id, _location, now);
    }

    function transfer(address _to, string _location, uint _boxId) external isStopped {     // 유통업자가 물건 전송
        Member memory sender = members[msg.sender];
        Member memory receiver = members[_to];

        require(sender.exists && receiver.exists);      // sender, receiver 가 등록되어 있을 경우에만 전송 가능

        emit Send(msg.sender, sender.description, _to, receiver.description, _boxId, _location, now);     // 발신 주소, 발신자 이름, 수신 주소, 수신자 이름, 물건 id , 장소, timestamp
    }

    function getMember(address _addr) external isStopped view returns(address, string) {        // 유통회사 조회
        Member memory member = members[_addr];
        require(member.exists);

        return (member.addr, member.description);
    }

    function getProducer(address _addr) external isStopped view returns(address, string) {        // 생산업자 조회
        Producer memory producer = producers[_addr];
        require(producer.exists);

        return (producer.addr, producer.description);
    }

    function setStopped(bool _stopped) external onlyOwner{
        stopped = _stopped;
    }

}