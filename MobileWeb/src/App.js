
function App(boxID) {

    this.initAbi();
    this.init(boxID);

    this.origin = document.getElementById('origin');
    this.description = document.getElementById('description');
    this.processDate = document.getElementById('processDate');
    this.inputDate = document.getElementById('inputDate');
}

App.prototype.init = function(boxID){
    if (window.web3){   // web3가 정의되어있다면 (사용자 브라우저에 메타마스크가 깔려있거나 지갑확장프로그램이 깔려있거나, mist 브라우저를 사용하고있는지)
        this.web3Provider = window.web3.currentProvider
    }else{
        this.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
    }
    window.web3 = new Web3(this.web3Provider);

    web3.eth.defaultAccount = '0x9dada6d96a529b6179c31813d8a6a81ab1371fbe';
    const contract = web3.eth.contract(this.abi);
    const app = contract.at('0xe5f9bC0D3b23CA36bfA8C10b4A5E2Ee247cA7ff9');


    app.Produce({boxId: boxID}, {fromBlock:0, toBlock:'latest'})
        .get((e,r)=>{
            this.origin.innerText = r[0].args.origin + ' | ' + r[0].args.location.split('항',1);

            let field = document.getElementById('field');

            let div = document.createElement('div');
            let leftDiv = document.createElement('div');
            let rightDiv = document.createElement('div');
            let centerDiv = document.createElement('div');


            div.setAttribute('class','tableRow');
            leftDiv.setAttribute('id','processDate');
            leftDiv.setAttribute('class','leftContent');

            leftDiv.appendChild(document.createTextNode('-'));
            rightDiv.setAttribute('id','description');
            rightDiv.setAttribute('class','rightContent');

            rightDiv.appendChild(document.createTextNode(r[0].args.producerDescription));
            centerDiv.setAttribute('id','location');
            centerDiv.setAttribute('class','centerContent');
            centerDiv.appendChild(document.createTextNode(r[0].args.location));

            div.appendChild(leftDiv);
            div.appendChild(centerDiv);
            div.appendChild(rightDiv);

            field.appendChild(div);

            app.Send({boxId: boxID}, {fromBlock:0, toBlock:'latest'})
                .get((e,r)=>{

                    this.inputDate.innerText = getInputDate(new Date(r[r.length-1].args.timestamp.c[0]));

                    for (let i=0; i<r.length; i++){

                        let timestamp = new Date(r[i].args.timestamp.c[0]);

                        let div = document.createElement('div');
                        let leftDiv = document.createElement('div');
                        let rightDiv = document.createElement('div');
                        let centerDiv = document.createElement('div');


                        div.setAttribute('class','tableRow');
                        leftDiv.setAttribute('id','processDate');
                        leftDiv.setAttribute('class','leftContent');
                        leftDiv.appendChild(document.createTextNode(getFullDate(timestamp)));

                        rightDiv.setAttribute('id','description');
                        rightDiv.setAttribute('class','rightContent');
                        rightDiv.appendChild(document.createTextNode(r[i].args.receiverDescription));

                        centerDiv.setAttribute('id','location');
                        centerDiv.setAttribute('class','centerContent');
                        centerDiv.appendChild(document.createTextNode(r[i].args.location));

                        div.appendChild(leftDiv);
                        div.appendChild(centerDiv);
                        div.appendChild(rightDiv);

                        field.appendChild(div);
                    }

                });
    });

};

function getFullDate( timestamp ) {
    let fullDate = new Date(timestamp * 1000);

    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let day = fullDate.getDate();
    let hour = fullDate.getHours();
    let min = fullDate.getMinutes();
    let sec = fullDate.getSeconds();
    return year + "." + (month < 10 ? "0" + month : month) + "."
        + (day < 10 ? "0" + day : day) + "\n"
        + (hour < 10 ? "0" + hour : hour) + ":"
        + (min < 10 ? "0" + min : min) + ":"
        + (sec < 10 ? "0" + sec : sec) + '\n';
}

function getInputDate( timestamp ) {
    let fullDate = new Date(timestamp * 1000);

    let year = fullDate.getFullYear();
    let month = fullDate.getMonth() + 1;
    let day = fullDate.getDate();
    return year + "." + (month < 10 ? "0" + month : month) + "."
        + (day < 10 ? "0" + day : day);
}

function getQueryString(){
    let _tempUrl = window.location.search.substring(1);
        return _tempUrl.split('=');
}


window.onload = function () {
    window.app = new App(getQueryString());
};
