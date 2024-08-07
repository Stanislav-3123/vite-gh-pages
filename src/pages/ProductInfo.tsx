import {useContext} from "react";
import {ProductsContext} from "../context/products/ProductContext";
import {ProductContextType} from "../context/products/ProductContext.types";
import Title from "../components/Title/Title";

const ProductInfo = () => {
    const {selectedProduct} = useContext(ProductsContext) as ProductContextType
    return (
        <div
            className="sm:pt-[120px] pt-[70px] inline-flex flex-col px-4 gap-8 justify-start overflow-y-hidden sm:overflow-y-visible items-center w-full">
            <Title title={selectedProduct.title} className={"font-bold text-3xl text-[#774cb4]"}/>
            <Title title={selectedProduct.description} className={"font-bold text-xl"}/>
            <Title title={""}
                   className={`px-4 w-full items-center h-[300px] py-[20px] flex-col rounded-[40px] ${selectedProduct.img} bg-cover 
                   justify-between bg-center items-start gap-[26px] inline-flex`}/>
            <Title title={"Форма выпуска:"} className={"font-bold text-3xl text-[#774cb4]"}/>
            <Title title={selectedProduct.form} className={"font-bold text-xl "}/>
            <div className={"flex flex-col gap-4"}>
                {selectedProduct.details.map(d => <div
                    className={"flex flex-col gap-2 border p-4 bg-neutral-300 rounded-[40px]"}>
                    <Title title={d.title} className={"text-xl text-pink  font-[500]"}/>
                    <Title title={d.text} className={"text-lg font-[500]"}/>
                </div>)}
            </div>
            <a className={"rounded-[20px] px-16 p-2 self-center bg-violet-300 text-white"}
               href={selectedProduct.document}>Сертификат</a>
            <Title title={"Цена 7200 руб."} className={"font-bold text-3xl text-pink"}/>
            <Title title={"Когда применять:"} className={"font-bold text-3xl text-[#774cb4]"}/>
            <Title title={selectedProduct.usage} className={"font-bold text-xl"}/>
            <Title title={"Почему Магний H2 Premium так эффективен?"} className={"font-bold text-3xl text-[#774cb4]"}/>
            <Title title={selectedProduct.effective} className={"font-bold text-xl"}/>

        </div>
    );
};

export default ProductInfo;