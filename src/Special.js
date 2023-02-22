function Special ({item}) {
    
    const christmasSearch = () => {
        item ('christmas');
};
const easterSearch = () => {
    item ('easter');
};
const hallowenSearch = () => {
    item ('halloween');
};
const newYearSearch = () => {
    item ('new year');
};
    return (
        <div className="container-one">
            <h2>Holiday recipes</h2>
            <div className="container-btn">
                <button className="btn" onClick={christmasSearch}>Christmas</button>
                <button className="btn" onClick={easterSearch}>Easter</button>
                <button className="btn" onClick={hallowenSearch}>Halloween</button>
                <button className="btn" onClick={newYearSearch}>New Year</button>
            </div>
        </div>
    )
}

export default Special;