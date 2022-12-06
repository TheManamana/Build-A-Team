
function generateCSS(){
    return `
        #title{
        font-size: 120px;
        font-weight:500;
        background-color: rgb(9, 87, 177);
    }
    
    #cardHead{
        background-color: rgb(72, 23, 117);
        
        color: azure ;
    }
    
    #fullBody{
        padding-top: 50px;
    }
    
    .card-control {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
    
        min-width: 250px;
    }
    
    .card-group{
        padding-left: 10px;
        padding-right: 10px;
    }
    `;
}











module.exports = generateCSS;