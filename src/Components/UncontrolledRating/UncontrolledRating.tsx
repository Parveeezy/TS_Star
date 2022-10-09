import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating() {

    const [value, setValue] = useState(0)

    const setStarHandleOne = () => {
        setValue(1)
    }
    const setStarHandleTwo = () => {
        setValue(2)
    }
    const setStarHandleThree = () => {
        setValue(3)
    }
    const setStarHandleFour = () => {
        setValue(4)
    }
    const setStarHandleFive = () => {
        setValue(5)
    }

    console.log('UncontrolledRating rendering')
        return (
            <div>
                <Star selected={value > 0}/><button onClick={setStarHandleOne}>1</button>
                <Star selected={value > 1}/><button onClick={setStarHandleTwo}>2</button>
                <Star selected={value > 2}/><button onClick={setStarHandleThree}>3</button>
                <Star selected={value > 3}/><button onClick={setStarHandleFour}>4</button>
                <Star selected={value > 4}/><button onClick={setStarHandleFive}>5</button>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering')

    return (
        props.selected ? <span><b>star </b></span> : <span>star </span>
    )
}