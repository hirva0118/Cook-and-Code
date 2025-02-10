import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Component/Cards';
import { Images } from '../assets/Images';

const cardData = [
  {
    id: 1,
    image: Images.mask1,
    description: 'How to prepare a delicious gluten free sushi',
    para: 'January 3,2023',
  },
  {
    id: 2,
    image: Images.mask2,
    description: 'How to prepare the perfect Pizza with cheesy flavor',
    para: 'January 3,2023',
  },
  {
    id: 3,
    image: Images.mask3,
    description: 'How to prepare the perfect fries in an air fryer',
    para: 'January 3,2023',
  },
  {
    id: 4,
    image: Images.mask4,
    description: 'How to prepare delicious chicken tenders',
    para: 'January 3,2023',
  },
  {
    id: 5,
    image: Images.mask5,
    description: '5 great cooking gadgets you can buy to save time',
    para: 'January 3,2023',
  },
  {
    id: 6,
    image: Images.mask6,
    description: 'The secret tips & tricks to prepare a perfect burger',
    para: 'January 3,2023',
  },
  {
    id: 7,
    image: Images.mask7,
    description: '7 delicious bread recipes you can prepare',
    para: 'January 3,2023',
  },
  {
    id: 8,
    image: Images.mask8,
    description: '5 great pizza restaurants you should visit this city',
    para: 'January 3,2023',
  },

];

const pageDetail = () => {
  const { index } = useParams();
  // console.log(index)
  // const parsedIndex = parseInt(index, 1);
  // const card=cardData[parsedIndex];  
  const card = cardData.find((item) => item.id == index);
  // console.log(card);
 
  if (!card) {
    // console.log("not found")
    return(
      <p>Card not found</p>
    )
  }
  return (
    <div className="container mt-10">
       <>
            <h1 className="mt-11 md:mt-20 text-center font-playfair text-2xl sm:text-3xl md:text-4xl md:text-6xl font-bold">
              {card.description}
            </h1>
            <img
              className="mx-auto w-full h-auto object-cover mt-16 "
              src={card.image}
              alt={card.description}
            />
            <p className="mb-5 mt-16 font-sans font-bold text-2xl">
              What do you need to prepare:
            </p>
            <p>Creating the perfect dishes is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.</p><br />
            <ol className=' p-3 list-decimal mb-7 font-sans text-lg'>
              <li><span className='font-bold'> Quality Beef:</span> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
              <li><span className='font-bold' >Seasoning:</span> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
              <li><span className='font-bold'>Don’t Overwork the Meat:</span> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
              <li><span className='font-bold'>Cooking:</span> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
              <li><span className='font-bold'>Resting:</span> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
            </ol>
          </>
    </div>
  );
};

export default pageDetail;
