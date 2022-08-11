import { Followers } from "../Followers/Followers"
import { Card } from "../Card/Card"

export const User = () => {
    return (
        <section>
            <div className="grid pt-[2rem]">
                <Card></Card>
                <Followers></Followers>
            </div>
        </section>
    )
}
