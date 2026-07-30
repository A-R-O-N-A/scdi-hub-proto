import { Link } from '@inertiajs/react';
import { BookOpen, FolderGit2, LayoutGrid } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [

    // {
    //     title: 'Dashboard',
    //     href: dashboard(),
    //     icon: LayoutGrid,
    // },

    {
        title: 'Agriculture',
        href: '/demo/agriculture',
        icon: LayoutGrid,
    },
    {
        title: 'Business',
        href: '/demo/business',
        icon: LayoutGrid,
    },
    {
        title: 'Education',
        href: '/demo/education',
        icon: LayoutGrid,
    },

    {
        title: 'Employment',
        href: '/demo/employment',
        icon: LayoutGrid,
    },

    {
        title: 'Environment and Natural Resources',
        href: '/demo/environment-resources',
        icon: LayoutGrid,
    },

    {
        title: 'Health',
        href: '/demo/health',
        icon: LayoutGrid,
    },
    {
        title: 'Residential',
        href: '/demo/residential',
        icon: LayoutGrid,
    },

    {
        title: 'Tourism',
        href: '/demo/tourism',
        icon: LayoutGrid,
    },

    {
        title: 'Transportation',
        href: '/demo/transportation',
        icon: LayoutGrid,
    },    
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: FolderGit2,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
