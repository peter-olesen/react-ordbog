export const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
        <p>&copy; {currentYear} Peter Olesen. All rights reserved.</p>
        </footer>
    )
}