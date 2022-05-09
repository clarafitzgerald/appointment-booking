import background1 from "../../img/background1.png";
import background2 from "../../img/background2.png";
import background3 from "../../img/background3.png";
import background4 from "../../img/background4.png";

const allBackgrounds = [
    background1,
    background2,
    background3,
    background4,
];

export const getCardImage = (lastName: string) => allBackgrounds[lastName.length % 4];
