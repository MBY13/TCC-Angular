import { environment } from "environments/environment.dev";

export class ApiRoutesHelpers
{
    public static GetAbsoluteRoute(relativeRoute: string): string
    {
        const host = environment.baseUrl;
        
        if (relativeRoute == null)
            return host;

        if (!relativeRoute.startsWith('/') && !host.endsWith('/'))
            relativeRoute = `/${relativeRoute}`;
        else if (relativeRoute.startsWith('/') && host.endsWith('/'))
            relativeRoute = relativeRoute.substring(1, relativeRoute.length);

        return host + relativeRoute;
    }
}