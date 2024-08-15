import Data from '../../assets/Data/Array.json'

export const Ordbog = () => {
    return (
        <>
        {Data.map((item) => (
            <div className="card" key={item.id}>
                <h2>{item.Title}</h2>
                <p>{item.Text}</p>
                <p>Tilføjet d. {item.Date}</p>
            </div>
        ))}
        </>
    )
}