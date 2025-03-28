import { Card, CardContent } from "@mui/material";
import { Suspense } from "react";
import Loading from "../loadingSkeletons/loading";
import DrinkSlot from "./drinkslot";
import FoodSlot from "./foodslot";
import OrderForm from "../orderui";

export default function Order() {
    return (
        <main>
            <h3 className="text-center text-xl">Daftar Menu</h3>
            <div className="grid grid-cols-2 mb-10">
                <div>
                    <p className="text-center md:ml-[24.707vw]">Makanan</p>
                    <Card className="md:ml-[24.707vw] md:mr-2 h-[75vh] !overflow-scroll">
                        <CardContent>
                            <Suspense fallback={<Loading/>}>
                                <FoodSlot/>
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <p className="text-center md:mr-[24.707vw]">Minuman</p>
                    <Card className="md:mr-[24.707vw] md:ml-2 h-[75vh] !overflow-scroll">
                        <CardContent>
                            <Suspense fallback={<Loading/>}>
                                <DrinkSlot/>
                            </Suspense>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <OrderForm/>
        </main>
    )
}