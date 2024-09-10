import './index.scss';

const AnimatedLetters = ({letterClass, setLetterClass, strArray, idx}) =>{
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char +i} className={`${letterClass} _${setLetterClass} _${i+idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters