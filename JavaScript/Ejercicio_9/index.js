const logger = require("./logger");

const myErrorMessege = () => {

    throw new Error("Error message");
};

try {
    logger.info(myErrorMessege()); 
}catch(error){
    logger.error(error);
}

