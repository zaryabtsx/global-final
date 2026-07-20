import ProductDetail from '../ProductDetail.jsx';
import { ALL_PRODUCTS } from '../../component/productsData';

// Short names used by the homepage product cards (from PRODUCT_DATA)
const HOME_PRODUCT_NAMES = [
  "Pelton-C",
  "Vonoglob",
  "Glomov",
  "Artinil-K",
  "Nalbin",
  "Anzonil",
  "Citolin",
  "Piractim",
  "Tamsol-D",
  "Norbac",
];

export function generateStaticParams() {
  const allNames = [
    ...ALL_PRODUCTS.map((product) => product.name.trim()),
    ...HOME_PRODUCT_NAMES,
  ];

  const uniqueNames = Array.from(new Set(allNames));

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
