import ProductDetail from '../ProductDetail.jsx';
import { ALL_PRODUCTS } from '../../component/productsData';

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    productName: product.name,
  }));
}

interface Props {
  params: Promise<{
    productName: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { productName } = await params;
  const decodedProductName = decodeURIComponent(productName);

  return <ProductDetail productName={decodedProductName} onBack={undefined} />;
}
