import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiHome5Line } from "react-icons/ri";
import { IoFastFoodOutline } from 'react-icons/io5';
import { FiUsers } from 'react-icons/fi';
import { VscOpenPreview } from 'react-icons/vsc';
import { MdOutlineInventory2 } from 'react-icons/md';
import { VscPackage } from "react-icons/vsc";
import { primaryColor } from '@/utils/variables';


const SidebarItems = () => {
    const router = useRouter();
    const selectorStyle = (LINK) => router.pathname === `/dashboard/${LINK}` ? primaryColor : 'lightgray';

    return (
        <>
            <Link href="/">
                <img src="/logo/logo2.png" className='img dashboard-logo' alt="Mai Thai" />
            </Link>

            <ul style={{ marginTop: 80, listStyleType: 'none', lineHeight: 4, color: 'gray' }}>
                <li>
                    <RiHome5Line
                        size={22}
                        style={{ color: selectorStyle('overview') }}
                    />

                    <Link
                        href="/dashboard/overview"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('overview') }}
                    >
                        Kitchen Overview
                    </Link>
                </li>

                <li>
                    <IoFastFoodOutline
                        size={22}
                        style={{ color: selectorStyle('foodsManage') }}
                    />

                    <Link
                        href="/dashboard/foodsManage"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('foodsManage') }}
                    >
                        Foods Manage
                    </Link>
                </li>

                <li>
                    <FiUsers
                        size={22}
                        style={{ color: selectorStyle('usersManage') }}
                    />

                    <Link
                        href="/dashboard/usersManage"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('usersManage') }}
                    >
                        Users Manage
                    </Link>
                </li>

                <li>
                    <VscOpenPreview
                        size={22}
                        style={{ color: selectorStyle('reviewsManage') }}
                    />

                    <Link
                        href="/dashboard/reviewsManage"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('reviewsManage') }}
                    >
                        Reviews Manage
                    </Link>
                </li>

                <li>
                    <MdOutlineInventory2
                        size={22}
                        style={{ color: selectorStyle('inventoryManage') }}
                    />

                    <Link
                        href="/dashboard/inventoryManage"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('inventoryManage') }}
                    >
                        Inventory Manage
                    </Link>
                </li>
                <li>
                    <VscPackage
                        size={22}
                        style={{ color: selectorStyle('packagesManage') }}
                    />

                    <Link
                        href="/dashboard/packageManage"
                        className="px-3 text-decoration-none"
                        style={{ color: selectorStyle('packagesManage') }}
                    >
                        Package Manage
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default SidebarItems;