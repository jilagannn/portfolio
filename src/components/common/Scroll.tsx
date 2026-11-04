import ScrollExpand from "@/lib/reactbits/ScrollExpand";
import akira from "@/assets/images/akira-wallpaper.webp";

export const Scroll = () => (
    <ScrollExpand
        src={akira}
        alt="akira background"
        title={
        <div className="w-full max-w-3xl text-black">
            <p className="text-left">&lt;JHEYRUS</p>
            <p className="text-right">ILAGAN/&gt;</p>
        </div>
        }
        scrollHint="↓ Scroll Down To View ↓"
        useWindowScroll
        overlayScrim={0}
        className='bg-[#222222]'
        startHeight={45}
        startWidth={55}
        startRadius={12}
    >
        <h1 className="text-7xl font-styrene font-semibold">&lt;welcome to my portfolio./&gt;</h1>
    </ScrollExpand>
);
