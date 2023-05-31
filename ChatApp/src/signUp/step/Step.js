
function Step({title, number}) {
    return (
<div className="step">
                    <p>{title}</p>
                    <div className="bullet">
                        <span>{number}</span>
                    </div>
                    <div className="check fas fa-check"></div>
                </div>
    );
}
export default Step;