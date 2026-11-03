import StaggeredMenu from "@/lib/reactbits/StaggeredMenu";
import { menuItems } from "@/data/menuItems";
import { socialItems } from "@/data/socialItems";


export const Menu = () => (
      <StaggeredMenu
            isFixed
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={false}
            menuButtonColor="#222222"
            openMenuButtonColor="#222222"
            changeMenuColorOnOpen={true}
            colors={['#ed8654', '#d7160e']}
            accentColor="#fa1012"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
)