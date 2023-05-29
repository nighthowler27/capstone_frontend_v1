import Header from "@/components/Header";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose copy";
import NewProducts from "@/components/NewProducts";

export default function HomePage({ featuredProduct, newProducts }) {
    return (
        <div>
            <Header />
            <Featured product={featuredProduct} />
            <NewProducts products={newProducts} />
            <Footer />
            <Copyright />
        </div>
    );
}

export async function getServerSideProps() {
    const featuredProductId = '64741253865623cf5fb604a0';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
    return {
        props: {
            featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
        },
    };
}