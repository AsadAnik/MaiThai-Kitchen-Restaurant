import { useState, useEffect } from 'react';
import Sidebar from 'react-sidebar';
import { HiMenuAlt1 } from "react-icons/hi";
import { useMediaQuery } from 'react-responsive';
import SidebarItems from "@/components/dashboard/Sidebar/SidebarItems";


const SidebarLayout = ({children}) => {
    const [sidebarDocked, setSidebarDocked] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const query = useMediaQuery({
        query: "(min-width: 800px)",
    });

    useEffect(() => {
        setSidebarDocked(query);
        setSidebarOpen(false);
    }, [query]);

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open);
    };


    return (
        <Sidebar
            sidebar={ <SidebarItems /> }
            open={sidebarOpen}
            docked={sidebarDocked}
            onSetOpen={onSetSidebarOpen}
            styles={{
                sidebar: {background: 'rgb(0 0 0 / 80%)', width: '270px', padding: '20px'},
                content: {position: 'absolute'},
            }}
        >
            <div style={{padding: 20, backgroundColor: 'rgb(253, 253, 253)', borderRadius: 10}}>
                {!sidebarDocked && (
                    <div onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <HiMenuAlt1 size={25} color="gray"/>
                    </div>
                )}
                {children}
            </div>
        </Sidebar>
    );
};

export default SidebarLayout;