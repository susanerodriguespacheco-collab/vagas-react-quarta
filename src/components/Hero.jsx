function Hero({ title, subtitle, children }) {
    return (
        <section className="hero">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {children}
    </section>
    )
}

export default Hero;