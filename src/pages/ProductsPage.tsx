import {useContext} from "react";
import {ProductsContext} from "../context/products/ProductContext";
import {ProductContextType} from "../context/products/ProductContext.types";
import Title from "../components/Title/Title";
import {Link} from "react-router-dom";

const ProductsPage = () => {
    const {allProducts, handleSetSelectedProduct} = useContext(ProductsContext) as ProductContextType
    return (
        <div
            className="sm:pt-[120px] pt-[70px] inline-flex flex-col gap-12 justify-start overflow-y-hidden sm:overflow-y-visible items-center w-full">
            <div
                className={"flex flex-col w-full px-4 gap-2"}>
                {allProducts.map(product => (
                    <div className={"flex flex-col gap-2 h-fit w-full h-[450px] bg-neutral-200 rounded-[40px] p-4"}>
                        <div className={"flex w-full justify-between"}>
                            <div><Title className={"text-[#774cb4] font-bold w-full"}
                                        title={product.title}/>
                                <div className={"font-bold"}><Title title={product.form} className={""}/>
                                </div>
                            </div>


                            <Title title={""}
                                   className={`px-4 w-[200px] items-center h-[100px] py-[20px] flex-col rounded-[40px] ${product.img} bg-cover justify-between bg-center items-start gap-[26px] inline-flex`}/>
                        </div>
                        <div className={"flex w-full justify-between"}>

                            <Title title={product.description} className={""}/>
                        </div>
                        <div className={"w-full flex justify-between"}>
                            <a className={"rounded-[20px] p-4 self-start bg-violet-300 text-white"}
                               href={product.document}>Сертификат</a>
                            <Link onClick={() => handleSetSelectedProduct(product.id)} to={`/product/${product.id}`}
                                  className={"rounded-[20px] p-4 self-start bg-pink text-white"}>Подробнее</Link>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;