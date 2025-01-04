import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="homepage">
            <header className="header">
                <h1>Welcome to Our Website</h1>
                <p>Your one-stop destination for all things amazing!</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <div className="feature-card">
                    <h2>Feature 1</h2>
                    <p>Learn more about our first amazing feature.</p>
                </div>
                <div className="feature-card">
                    <h2>Feature 2</h2>
                    <p>Discover how this feature can benefit you.</p>
                </div>
                <div className="feature-card">
                    <h2>Feature 3</h2>
                    <p>Explore the details of this great feature.</p>
                </div>
            </section>
            <Link to="/login">Login</Link>
        </div>
    );
}
