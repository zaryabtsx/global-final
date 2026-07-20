import ProductDetail from '../ProductDetail.jsx';
import { ALL_PRODUCTS } from '../../component/productsData';

export function generateStaticParams() {
  const uniqueNames = Array.from(
    new Set(ALL_PRODUCTS.map((product) => product.name.trim()))
  );

  return uniqueNames.map((productName) => ({ productName }));
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
