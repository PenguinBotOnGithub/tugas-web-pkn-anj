import "./NavigationBar.css"

function NavigationBar() {
    return (
        <div class="nav">
            <a href="/" class="logo">Budaya Kudus</a>
            <div class="nav-links">
                <a href="/destinasi">Destinasi</a>
                <a href="/blog">Blog</a>
                <a href="/kontak">Kontak</a>
            </div>
        </div>
    );
}

export default NavigationBar;