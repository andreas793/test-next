import Link from "next/link";
import Image from "next/image";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const getSingleDrink = async (id) => {
    const res = await fetch(`${url}${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch a drink...');
    }
    return res.json();
}


const SingleDrinkPage = async ({params}) => {
    const data = await getSingleDrink(params.id);
    const title = data?.drinks[0]?.strDrink;
    const imgSrc = data?.drinks[0]?.strDrinkThumb;
    return (
        <div>
            <Link className="btn btn-primary mt-8 mb-12" href="/drinks">Back to drinks</Link>
            <h3 className='text-4xl mb-8'>{title}</h3>
            <div>
                <Image src={imgSrc}
                       width={300}
                       height={300}
                       className='w-48 h-48 rounded-lg mb-4 shadow-lg'
                       alt="title"
                       quality={75}
                       loading="lazy"
                       priority={false}
                />
            </div>
        </div>
    );
};

export default SingleDrinkPage;