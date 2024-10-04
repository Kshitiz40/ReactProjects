import Card from "./components/Card";

function Proj02() {
    let myObj = {
        name : "Kshitiz",
        age : 20
    }
    return (
        <>
            <div className="">
                <Card name="Kshitiz kaintura" clas="4" someObj={{name:'Kshitiz',age:20}} someObj2={myObj} />
                <Card/>
            </div>
        </>
    )
}

export default Proj02