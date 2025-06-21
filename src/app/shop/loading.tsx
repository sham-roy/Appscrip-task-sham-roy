// app/shop/loading.tsx
import '@/components/Shop/ShopPageClient.css'; // Reuse styles

export default function Loading() {

    return (
        <div className="pageContainer">
            <div className="heroSection" style={{ opacity: 0.5 }}>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Loading products, please wait...</p>
            </div>
            <div className="controlsBar"></div>
            <div className="mainContent">
                <div className="filterContainer" style={{ backgroundColor: '#f3f3f3', borderRadius: '8px' }}></div>
                <div className="productGridContainer">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            style={{ height: '462px', backgroundColor: '#f3f3f3', borderRadius: '8px' }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );

}