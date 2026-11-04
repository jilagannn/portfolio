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
            openMenuButtonColor="#f0f0f0"
            changeMenuColorOnOpen={true}
            colors={['#ed8654', '#d7160e']}
            accentColor="#d7373a"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
)