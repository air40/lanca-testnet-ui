import { FC, useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { ScreenLoader } from "../ScreenLoader/ScreenLoader";
import { routes } from "@/configuration/routes";

export const ConnectedRoutesGuard: FC = (): JSX.Element => {
    const { isConnected, isConnecting } = useAccount();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setIsLoading(false);
        }, 200);
        
        return () => clearTimeout(timer);
    }, []);
    
    if (isConnecting || isLoading) {
        return <ScreenLoader />;
    }
    
    return isConnected ? <Outlet /> : <Navigate to={routes.home} replace />;
}

export const DisconnectedRoutesGuard: FC = (): JSX.Element => {
    const { isConnected, isConnecting } = useAccount();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setIsLoading(false);
        }, 200);
        
        return () => clearTimeout(timer);
    }, []);
    
    if (isConnecting || isLoading) {
        return <ScreenLoader />;
    }
    
    return !isConnected ? <Outlet /> : <Navigate to={routes.swap} replace />;
}