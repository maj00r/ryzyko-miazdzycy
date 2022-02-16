import './ProbabilityCell.css';

type CellProps = {
    value: number,
    isCurrentValue?: boolean
}

const setColors = (value: number) => {
    let backColor = 'gray',
        textColor = 'black'
    if (value < 1) {
        backColor = 'rgb(5, 158, 0)'
    }
    if (value == 1) {
        backColor = 'rgb(189, 255, 82)'
    }
    if (value == 2) {
        backColor = 'rgb(255, 251, 0)'
    }
    if (value >= 3) {
        backColor = 'rgb(248, 148, 66)'
    }
    if (value >= 5) {
        backColor = 'rgb(255, 0, 0)'
        textColor = 'white'
    } 
    if (value >= 10) {
        backColor = 'rgb(190, 0, 0)'
        textColor = 'white'
    } 
    if (value >= 15) {
        backColor = 'rgb(146, 17, 0)'
        textColor = 'white'
    }
    return { backColor, textColor }
}

const ProbabilityCell: React.FC<CellProps> = ({ value, isCurrentValue}) => {
    const {textColor, backColor} = setColors(value)
    const currentValueClass = isCurrentValue ? 'currentValue' : undefined
    return (
        <div id='wrapper' className={currentValueClass} 
            style={{backgroundColor: backColor, 
                color: textColor}}>
            {value}
        </div>
    );
  };

export default ProbabilityCell;  