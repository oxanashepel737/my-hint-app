import React, {FC, JSX, useCallback, useRef, useState, useLayoutEffect} from "react";
import "./Hint.css";

type HintProps = {
    children: React.ReactNode;
    direction?: 'top' | 'bottom' | 'right' | 'left',
    text: string | JSX.Element
};
const Hint: FC<HintProps> = ({children, direction = 'top', text}) => {
    const hintRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hintElementRef = useRef<HTMLDivElement>(null);
    const [dynamicDirection, setDynamicDirection] = useState<string>(direction);
    const onMouseEnter = useCallback(() => {
        setIsVisible(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);
    useLayoutEffect(() => {
        if(hintElementRef.current) {
           const  rect = hintElementRef.current.getBoundingClientRect()
            if(rect.left < 0 && direction === 'left') {
                setDynamicDirection('right')
            }
            if(rect.top < 0 && direction === 'top') {
                setDynamicDirection('bottom')
            }
            if (rect.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
                setDynamicDirection('top')
            }
            if (rect.right > (window.innerWidth || document.documentElement.clientWidth)) {
                setDynamicDirection('left')
            }
        }
    }, [direction, isVisible])
    return (
        <div className='hint-wrapper'
             ref={hintRef}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
             onFocus={onMouseEnter}
             onBlur={onMouseLeave}
        >
            {children}
            {isVisible && (
                <div className={`hint-container ${dynamicDirection}`}
                     ref={hintElementRef}
                >
                    {text}
                </div>
            )}
        </div>
    )
}
export default Hint
