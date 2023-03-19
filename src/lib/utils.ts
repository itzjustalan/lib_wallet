export const getCookieValue = (name: string, cookie: string | null) =>
    cookie?.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)")?.pop() || null;

export const sleep = async (t: number) => new Promise((r) => setTimeout(r, t));

export const withTimeout = (p: object, msg = "time out", ms = 1000) =>
    Promise.race([p, new Promise((_, r) => setTimeout(() => r(msg), ms))]);

// export const unregisterSWs = () => {
//     navigator.serviceWorker.getRegistrations().then(function (registrations) {
//         for (let registration of registrations) {
//             registration.unregister();
//         }
//     });
// }

export const unregisterSWs = () => navigator.serviceWorker.getRegistrations()
    .then(rgs => rgs.forEach(rg => rg.unregister()));
