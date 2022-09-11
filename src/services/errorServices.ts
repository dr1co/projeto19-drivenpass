export default function handleError(code: string) {
    switch(code) {
        case "RegisteredUser":
            return 401;
        case "ServerProblem":
            return 500;
        default:
            return 418;
    }
}