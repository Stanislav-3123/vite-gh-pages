import {useContext} from "react";
import {ProductsContext} from "../../context/products/ProductContext";
import {ProductContextType} from "../../context/products/ProductContext.types";
import Title from "../Title/Title";
import {Link} from "react-router-dom";

const SliderSVG = () => {
    const {allProducts, handleSetSelectedProduct} = useContext(ProductsContext) as ProductContextType
    return (
        <div
            className="overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
            <div className="flex gap-2 px-4">
                {allProducts.map(product => (
                    <div
                        className={`px-4 w-[260px] items-center h-[300px] py-[20px] flex-col rounded-[40px] ${product.img} bg-cover justify-between bg-center items-start gap-[26px] inline-flex`}>
                        <Title className={"text-center text-pink font-bold"} title={product.title}/>
                        <Link onClick={() => handleSetSelectedProduct(product.id)} to={`/product/${product.id}`}
                              className={"rounded-[20px] px-6 p-1 self-center bg-pink text-white"}>Подробнее</Link>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default SliderSVG;