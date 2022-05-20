import { SidebarItem } from './SidebarItem';
import { SidebarLink } from './SidebarLink';

export function Sidebar() {
    return (
        <div className='flex'>
            <div className='h-screen flex-0-auto shado overflow-hidden transition-all duration-500 w-2 hover:w-80'>
                <SidebarItem>
                    <SidebarLink to='/scales'>scales</SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <SidebarLink to='/home'>home</SidebarLink>
                </SidebarItem>
            </div>
        </div>
    );
}
