import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import NewsSection from "../sections/News";

const NewsPage = () => {
    return (
        <Layout title="News" description="Stay updated with the latest events and news from Wagon Group of Schools.">
            <PageHeader title="School News" subtitle="Capturing the moments that define us." />
            <NewsSection />
        </Layout>
    );
};

export default NewsPage;
