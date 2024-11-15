const getEnvConfig = () => {

    return process.env;
};


const Backend_Server = getEnvConfig().REACT_APP_API_BASE_URL;
const App_Base_URL = getEnvConfig().REACT_APP_BASE_URL;

const siteConfig = {
    App_Base_URL: App_Base_URL,
    is_production: getEnvConfig().IS_PRODUCTION,
    backendServer: Backend_Server,
    siteName: 'Oxilog @',
    siteIcon: 'ion-flash',
    footerText: `Oxilog @ ${new Date().getFullYear()}`,
    apiUrl: getEnvConfig().REACT_APP_API_BASE_URL,
    tz: 'Europe/Paris'
}

export const apiUrl = siteConfig.apiUrl;
export const tz = siteConfig.tz;

export default siteConfig;
