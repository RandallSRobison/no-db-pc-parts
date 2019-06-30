let id = 21;
const partsArr = [
  {
    id: 1,
    name: "i9-9900K",
    type: "CPU",
    make: "Intel",
    favStatus: true,
    image: "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com//512483_831362_01_front_zoom.jpg"
  },
  {
    id: 2,
    name: "Ryzen 2700X",
    type: "CPU",
    make: "AMD",
    favStatus: true,
    image: "https://i.ebayimg.com/images/i/283144042277-0-1/s-l1000.jpg"
  },
  {
    id: 3,
    name: "GTX 1080Ti FTW3",
    type: "GPU",
    make: "EVGA",
    favStatus: true,
    image: "https://www.vali.bg/UserFiles/Product/gallery_1/0BB7D73D-93DF-2971-5F25-501391A51802.jpg?w=1000&h=1000&block&cache"
  },
  {
    id: 4,
    name: "RTX 2060 FE",
    type: "GPU",
    make: "Nvidia",
    favStatus: true,
    image: "https://i.ebayimg.com/images/i/254087165077-0-1/s-l1000.jpg"
  },
  {
    id: 5,
    name: "Vengeance RGB Pro 16GB 2x8",
    type: "RAM",
    make: "Corsair",
    favStatus: false,
    image: "https://www.jib.co.th/img_master/product/original/20180718091708_30510_21_1.jpg"
  },
  {
    id: 6,
    name: "RTX TITAN",
    type: "GPU",
    make: "Nvidia",
    favStatus: true,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320585_sd.jpg"
  },
  {
    id: 7,
    name: "i7-8700K",
    type: "CPU",
    make: "Intel",
    favStatus: false,
    image: "http://www.shoppingexpress.com.au/assets/full/BX80684I78700K.jpg"
  },
  {
    id: 8,
    name: "ROG Z370-F",
    type: "Motherboard",
    make: "ASUS",
    favStatus: false,
    image: "https://uk.store.asus.com/media/catalog/product/cache/1/image/85e4522595efc69f496374d01ef2bf13/9/0/90MB0V50-M0EAY_1.._1.jpg"
  },
  {
    id: 9,
    name: "i7-6700K",
    type: "CPU",
    make: "Intel",
    favStatus: false,
    image: "https://i.ebayimg.com/images/i/323726523445-0-1/s-l1000.jpg"
  },
  {
    id: 10,
    name: "Ryzen 2600",
    type: "CPU",
    make: "AMD",
    favStatus: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/51W-O4Jn9EL._SL1000_.jpg"
  },
  {
    id: 11,
    name: "RTX 2070 Gaming OC",
    type: "GPU",
    make: "Gigabyte",
    favStatus: false,
    image: "https://www.jib.co.th/img_master/product/original/2018101911291731920_1.png"
  },
  {
    id: 12,
    name: "RTX 2070 Gaming Z",
    type: "GPU",
    make: "MSI",
    favStatus: false,
    image: "http://www.shoppingexpress.com.au/assets/full/RTX-2070-GAMING-Z-8G.jpg"
  },
  {
    id: 13,
    name: "Predator RGB 16GB",
    type: "RAM",
    make: "HyperX",
    favStatus: false,
    image: "https://c.76.my/Malaysia/kingston-hyperx-predator-rgb-16gb-desktop-ram-kit-2-nbpstore-1903-17-F1546830_1.jpg"
  },
  {
    id: 14,
    name: "Dominator Platinum 32GB",
    type: "RAM",
    make: "Corsair",
    favStatus: false,
    image: "https://i.ebayimg.com/images/i/312263387435-0-1/s-l1000.jpg"
  },
  {
    id: 15,
    name: "Trident Z RGB 32GB",
    type: "RAM",
    make: "G.Skill",
    favStatus: false,
    image: "https://www.jib.co.th/img_master/product/original/20180718164532_25243_21_1.jpg"
  },
  {
    id: 16,
    name: "Z370 TOMAHAWK",
    type: "Motherboard",
    make: "MSI",
    favStatus: false,
    image: "https://www.jib.co.th/img_master/product/original/20180808101331_27464_24_1.png"
  },
  {
    id: 17,
    name: "Z390 DARK",
    type: "Motherboard",
    make: "EVGA",
    favStatus: true,
    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6332/6332673_sd.jpg"
  },
  {
    id: 18,
    name: "RTX 2080Ti FTW3",
    type: "GPU",
    make: "EVGA",
    favStatus: true,
    image: "https://i.ebayimg.com/images/i/132930025745-0-1/s-l1000.jpg"
  },
  {
    id: 19,
    name: "DARK PRO 16GB",
    type: "RAM",
    make: "Team Group",
    favStatus: false,
    image: "https://images-na.ssl-images-amazon.com/images/I/61pUFCCLCuL._SL1000_.jpg"
  },
  {
    id: 20,
    name: "ROG Strix B450-I Gaming",
    type: "Motherboard",
    make: "ASUS",
    favStatus: false,
    image: "https://i.ebayimg.com/images/i/123511160131-0-1/s-l1000.jpg"
  }
  
];

module.exports = {
  //adding our parts array (partsArr), this is our axios.get, or componentDidMount
  getParts: (req, res) => {
    res.status(200).send(partsArr);
  },
  //adding a new part to our partsArr, this is the axios.post function
  addPart: (req, res) => {
    let { name, type, make, favorite, image } = req.body;
    let newPart = {
      id,
      name,
      type,
      make,
      favStatus: favorite,
      image
    };

    partsArr.push(newPart);
    id++;

    res.status(200).send(partsArr);
  },
  //deleting a part at its id from the partsArr, this is axios.delete
  deletePart: (req, res) => {
    const { id } = req.params;

    let index = partsArr.findIndex(part => part.id === +id);

    partsArr.splice(index, 1);


    res.status(200).send(partsArr);
  },

  updateFavStatus: (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    let index = partsArr.findIndex(part => part.id === +id);

    let updatedPart = {
      favStatus: status
    };
    partsArr[index] = { ...partsArr[index], ...updatedPart };

    res.status(200).send(partsArr);
  }
};
