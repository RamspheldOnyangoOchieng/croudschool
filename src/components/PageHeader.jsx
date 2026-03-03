import "./PageHeader.css";

const PageHeader = ({ title, subtitle }) => {
    return (
        <div className="page-header">
            <div className="container">
                <h1 className="ph-title">{title}</h1>
                {subtitle && <p className="ph-subtitle">{subtitle}</p>}
            </div>
        </div>
    );
};

export default PageHeader;
