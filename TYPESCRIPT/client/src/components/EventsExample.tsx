import {FC, useState, ChangeEvent, MouseEvent, DragEvent, useRef} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null);

    function changeHandler(e: ChangeEvent<HTMLInputElement>){
        setValue(e.target.value);
    }

    function clickHandler(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        console.log(inputRef.current?.value)
    }

    function dragHandler(e: DragEvent<HTMLDivElement>){
        console.log(e)
        console.log("DRAG")
    }

    function dragWithPreventHandler(e: DragEvent<HTMLDivElement>){
        e.preventDefault()
        setIsDrag(true)
    }

    function leaveHandler(e: DragEvent<HTMLDivElement>){
        e.preventDefault()
        setIsDrag(false)
    }

    function dropHandler(e: DragEvent<HTMLDivElement>){
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP")
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder="Controlled"/>
            <input ref={inputRef} type="text" placeholder="Not Controlled"/>
            <button onClick={clickHandler}>Click</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, backgroundColor: "red"}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, backgroundColor: isDrag ? "blue" :  "red", marginTop: 15}}></div>
        </div>
    );
};

export default EventsExample;
